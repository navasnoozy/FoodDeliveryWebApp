import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByPrice, filterByRestaurant, getAllFoods } from '../../store/slice/foodSlice';
import type { RootState } from '../../store/store';

const FilterComponent = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state: RootState) => state.food.restaurants);
  const allFoods = useSelector((state: RootState) => state.food.allFoods);
  
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(allFoods.map((item) => item.category))];

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const applyPriceFilter = () => {
    dispatch(filterByPrice({ min: priceRange[0], max: priceRange[1] }));
  };

  const handleRestaurantChange = (value: string) => {
    setSelectedRestaurant(value);
    setSelectedCategory(''); 
    if (value) {
      dispatch(filterByRestaurant(value));
    } else {
      dispatch(getAllFoods());
    }
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const clearAllFilters = () => {
    setPriceRange([0, 500]);
    setSelectedRestaurant('');
    setSelectedCategory('');
    dispatch(getAllFoods());
  };

  const hasActiveFilters = selectedRestaurant || selectedCategory || priceRange[0] !== 0 || priceRange[1] !== 500;

  return (
    <Paper sx={{ p: 3, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Filters</Typography>
        {hasActiveFilters && (
          <Button size="small" color="error" onClick={clearAllFilters}>
            Clear All
          </Button>
        )}
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography gutterBottom>
          Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          onChangeCommitted={applyPriceFilter}
          valueLabelDisplay="auto"
          min={0}
          max={500}
          sx={{ mt: 2 }}
        />
      </Box>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Restaurant</InputLabel>
        <Select
          value={selectedRestaurant}
          label="Restaurant"
          onChange={(e) => handleRestaurantChange(e.target.value)}
        >
          <MenuItem value="">All Restaurants</MenuItem>
          {restaurants.map((restaurant) => (
            <MenuItem key={restaurant.name} value={restaurant.name}>
              {restaurant.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          label="Category"
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {hasActiveFilters && (
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {selectedRestaurant && (
            <Chip
              label={`Restaurant: ${selectedRestaurant}`}
              onDelete={() => handleRestaurantChange('')}
              color="primary"
              size="small"
            />
          )}
          {selectedCategory && (
            <Chip
              label={`Category: ${selectedCategory}`}
              onDelete={() => handleCategoryChange('')}
              color="primary"
              size="small"
            />
          )}
          {(priceRange[0] !== 0 || priceRange[1] !== 500) && (
            <Chip
              label={`₹${priceRange[0]}-₹${priceRange[1]}`}
              onDelete={() => {
                setPriceRange([0, 500]);
                dispatch(getAllFoods());
              }}
              color="primary"
              size="small"
            />
          )}
        </Box>
      )}
    </Paper>
  );
};

export default FilterComponent;