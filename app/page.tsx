import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

export const metadata: Metadata = {
  title: 'หน้าแรก - Attractions Thailand',
  description: 'รายการสถานที่ท่องเที่ยวทั้งหมดในประเทศไทย',
};

async function getData() {
  try {
    const res = await fetch('https://www.melivecode.com/api/attractions', {
      next: { revalidate: 3600 } // Revalidate ทุก 1 ชั่วโมง
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Failed to fetch attractions:', error);
    return null;
  }
}

interface Attraction {
  id: number;
  name: string;
  detail: string;
  coverimage: string;
  latitude: number;
  longitude: number;
}

export default async function HomePage() {
  const data = await getData();

  if (!data) {
    return (
      <Container maxWidth="md">
        <Alert severity="error" sx={{ mt: 4 }}>
          ไม่สามารถโหลดข้อมูลสถานที่ท่องเที่ยวได้ กรุณาลองใหม่อีกครั้ง
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        สถานที่ท่องเที่ยวในไทย
      </Typography>
      <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 4 }}>
        สำรวจสถานที่ท่องเที่ยวที่น่าสนใจทั่วประเทศไทย
      </Typography>
      
      <Grid container spacing={3}>
        {data.map((attraction: Attraction) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={attraction.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={attraction.coverimage}
                alt={attraction.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {attraction.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    flexGrow: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    mb: 2
                  }}
                >
                  {attraction.detail}
                </Typography>
                <Link 
                  href={`/${attraction.id}`}
                  style={{ 
                    textDecoration: 'none',
                    color: '#1976d2',
                    fontWeight: 500,
                    marginTop: 'auto'
                  }}
                >
                  อ่านเพิ่มเติม →
                </Link>
              </CardContent>
            </Card>
            </Grid>
        ))}
      </Grid>
    </Container>
  );
}
