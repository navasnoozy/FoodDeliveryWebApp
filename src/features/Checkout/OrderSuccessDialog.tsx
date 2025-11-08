import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface OrderSuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

const OrderSuccessDialog = ({ open, onClose }: OrderSuccessDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ textAlign: 'center', py: 6 }}>
        <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Order Successful!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Your order has been placed successfully. We'll deliver it to you soon!
        </Typography>
        <Button variant="contained" size="large" onClick={onClose}>
          Continue Shopping
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSuccessDialog;