import { Container, Grid } from "@mui/material";
import type { Key } from "react";
import FoodCard from "../features/Home/FoodCard";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Foodlist = () => {
  const allFood = useSelector((state: RootState) => state.food.allFoods);

  return (
    <Container>
      <Grid container spacing={2} maxWidth="xl">
        {allFood.map((item: { id: Key | null | undefined; image: any; name: any; price: any }) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <FoodCard imageUrl={item.image} itemName={item.name} price={item.price} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Foodlist;
