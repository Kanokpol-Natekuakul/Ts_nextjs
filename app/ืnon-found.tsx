import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          ไม่พบหน้าที่คุณต้องการ
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          สถานที่ท่องเที่ยวที่คุณกำลังมองหาอาจไม่มีอยู่ หรือถูกลบไปแล้ว
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          size="large"
        >
          กลับหน้าแรก
        </Button>
      </Box>
    </Container>
  );
}
