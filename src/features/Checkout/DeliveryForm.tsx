import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField
} from '@mui/material';
import { useState } from 'react';

interface DeliveryFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: DeliveryData) => void;
}

export interface DeliveryData {
  name: string;
  address: string;
  phone: string;
}

const DeliveryForm = ({ open, onClose, onSubmit }: DeliveryFormProps) => {
  const [formData, setFormData] = useState<DeliveryData>({
    name: '',
    address: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', address: '', phone: '' });
  };

  const handleChange = (field: keyof DeliveryData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Delivery Details</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <TextField
              label="Full Name"
              value={formData.name}
              onChange={handleChange('name')}
              fullWidth
            />
            
            <TextField
              label="Delivery Address"
              value={formData.address}
              onChange={handleChange('address')}
              fullWidth
              multiline
              rows={3}
            />
            
            <TextField
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange('phone')}
              fullWidth
              placeholder="1234567890"
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Place Order
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DeliveryForm;