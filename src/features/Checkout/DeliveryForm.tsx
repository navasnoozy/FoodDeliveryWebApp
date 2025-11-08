import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  Alert,
} from '@mui/material';

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
  const [errors, setErrors] = useState<Partial<DeliveryData>>({});

  const validate = () => {
    const newErrors: Partial<DeliveryData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ name: '', address: '', phone: '' });
    }
  };

  const handleChange = (field: keyof DeliveryData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
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
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              required
            />
            
            <TextField
              label="Delivery Address"
              value={formData.address}
              onChange={handleChange('address')}
              error={!!errors.address}
              helperText={errors.address}
              fullWidth
              required
              multiline
              rows={3}
            />
            
            <TextField
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange('phone')}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
              required
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