import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { foodItems } from "../../data/foodItems";
import type { FoodItemType, RestaurantType } from "../../types/food";

interface FoodState {
  allFoods: FoodItemType[];
  filteredFoods: FoodItemType[];
  restaurants: RestaurantType[];
  selectedRestaurant?: string;
}

const initialState: FoodState = {
  allFoods: [...foodItems],
  filteredFoods: [...foodItems],
  restaurants: Array.from(new Map(foodItems.map((item) => [item.restaurant.name, item.restaurant])).values()),
  selectedRestaurant: undefined,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    getAllFoods: (state) => {
      state.filteredFoods = state.allFoods;
      state.selectedRestaurant = undefined;
    },

    filterByPrice: (state, action: PayloadAction<{ min: number; max: number }>) => {
      const { min, max } = action.payload;
      state.filteredFoods = state.allFoods.filter((item) => item.price >= min && item.price <= max);
      state.selectedRestaurant = undefined;
    },

    sortByPrice: (state, action: PayloadAction<"asc" | "desc">) => {
      state.filteredFoods = [...state.filteredFoods].sort((a, b) => (action.payload === "asc" ? a.price - b.price : b.price - a.price));
    },

    filterByCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (category === "") {
        state.filteredFoods = state.allFoods;
      } else {
        state.filteredFoods = state.allFoods.filter((item) => item.category === category);
      }
    },

    getAllRestaurants: (state) => {
      state.restaurants = Array.from(new Map(state.allFoods.map((item) => [item.restaurant.name, item.restaurant])).values());
    },

    filterByRestaurant: (state, action: PayloadAction<string>) => {
      state.filteredFoods = state.allFoods.filter((item) => item.restaurant.name.toLowerCase() === action.payload.toLowerCase());
      state.selectedRestaurant = action.payload;
    },

    searchFoods: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase().trim();
      if (query === "") {
        state.filteredFoods = state.allFoods;
        return;
      }

      state.filteredFoods = state.allFoods.filter(
        (item) => item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query) || item.restaurant.name.toLowerCase().includes(query)
      );
    },
  },
});

export const { getAllFoods, filterByPrice, sortByPrice, getAllRestaurants, filterByRestaurant, searchFoods, filterByCategory } = foodSlice.actions;

export default foodSlice.reducer;
