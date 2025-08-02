import { get } from 'http';
import Link from 'next/link';
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


async function getData(){
  const res = await fetch('https://www.melivecode.com/api/attractions')
  if(!res.ok){
    throw new Error('Failed to fetch')
  }
  return res.json()
}
interface attraction {
  id: number,
  name: string,
  detail: string,
  coverimage: string,
  latitude: number,
  longitude: number
}

export default async function page() {
  const data = await getData()
  console.log(data)
  return (
    <Container maxWidth="md">
      <h1>Attractions</h1>
      <Grid container spacing={2}>
      { data.map((a: attraction)=>(
        <Grid size={{ xs: 12, md: 4 }} key={a.id}>
            <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={a.coverimage}
        title={a.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {a.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {a.detail}
        </Typography>
        <Link href={'/'+a.id}>
          Learn More
        </Link>
      </CardContent>
      
       
    </Card>
          </Grid>
      )) }
      </Grid>
    </Container>
  )
}
