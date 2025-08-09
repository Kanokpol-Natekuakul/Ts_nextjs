import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface PageParams {
  params: Promise<{
    id: string;
  }>;
}

interface AttractionResponse {
  attraction: {
    id: number;
    name: string;
    detail: string;
    coverimage: string;
    latitude: number;
    longitude: number;
  };
}

async function getData(id: string): Promise<AttractionResponse | null> {
  try {
    const res = await fetch(`https://www.melivecode.com/api/attractions/${id}`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Failed to fetch attraction:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { id } = await params;
  const data = await getData(id);
  
  if (!data) {
    return {
      title: 'ไม่พบสถานที่ท่องเที่ยว',
    };
  }

  return {
    title: `${data.attraction.name} - Attractions Thailand`,
    description: data.attraction.detail,
    openGraph: {
      title: data.attraction.name,
      description: data.attraction.detail,
      images: [data.attraction.coverimage],
    },
  };
}

export default async function AttractionDetailPage({ params }: PageParams) {
  const { id } = await params;
  const data = await getData(id);

  if (!data) {
    notFound();
  }

  const { attraction } = data;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Button
          component={Link}
          href="/"
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          color="primary"
        >
          กลับหน้าแรก
        </Button>
      </Box>

      <Card>
        <CardMedia
          component="img"
          height="400"
          image={attraction.coverimage}
          alt={attraction.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ p: 4 }}>
          <Typography gutterBottom variant="h3" component="h1">
            {attraction.name}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
            {attraction.detail}
          </Typography>
          
          {attraction.latitude && attraction.longitude && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                ตำแหน่งที่ตั้ง
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ละติจูด: {attraction.latitude}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ลองจิจูด: {attraction.longitude}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
