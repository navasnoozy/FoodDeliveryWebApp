export interface Restaurant {
  name: string;
  image: string;
}

export interface FoodItem {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  restaurant: Restaurant;
}
