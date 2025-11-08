import { Box, Typography, Container } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#f44336',
        color: 'white',
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
            mb: 3,
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <RestaurantIcon sx={{ mr: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Have@Home
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Authentic Kerala cuisine delivered to your doorstep
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5, cursor: 'pointer' }}>
              • About Us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5, cursor: 'pointer' }}>
              • Restaurants
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, cursor: 'pointer' }}>
              • Contact
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
              📍 Perinthalmanna, Malappuram
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
              📧 support@havehome.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              📞 +91 1234567890
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Hours
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
              Mon-Fri: 9AM-10PM
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Sat-Sun: 9AM-11PM
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            © 2025 Have@Home. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;