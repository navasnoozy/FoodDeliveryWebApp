import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Card, CardMedia, Chip, Container, Grid, Rating, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import AddToCart from "../components/AddToCart";
import type { RootState } from "../store/store";

const RestaurantDetailsPage = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const restaurant = useSelector((state: RootState) => state.food.restaurants.find((r) => r.name === name));

  const restaurantFoods = useSelector((state: RootState) => state.food.allFoods.filter((item) => item.restaurant.name === name));

  if (!restaurant) {
    return (
      <Container>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 4 }}>
          Restaurant not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        Back
      </Button>

      <Card sx={{ mb: 4 }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" image={`/restaurants/${restaurant.image}.png`} alt={restaurant.name} sx={{ height: 300, objectFit: "cover" }} />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              p: 3,
            }}
          >
            <Typography variant="h3" fontWeight="bold" color="white">
              {restaurant.name}
            </Typography>
          </Box>
        </Box>
      </Card>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Menu
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {restaurantFoods.length} items available
        </Typography>
      </Box>

      {restaurantFoods.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", py: 4 }}>
          No items available from this restaurant
        </Typography>
      ) : (
        <Grid container spacing={2}>
    {restaurantFoods.map((item) => (
    <Grid
      key={item.id}
      container
      size={12}
      alignItems="center"
      sx={{
        borderBottom: "1px solid #eee",
        py: 1.5,
      }}
    >
      {/* Wrapper: Adjust layout for mobile vs desktop */}
      <Grid
        container
        size={12}
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* === Name (Left) === */}
        <Grid
          size={{ xs: 6, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-start" },
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ lineHeight: 1.2 }}
          >
            {item.name}
          </Typography>

          {/* Rating below name on small screen only */}
          <Box sx={{ display: { xs: "block", md: "none" }, mt: 0.8 }}>
            <Rating
              name={`rating-mobile-${item.id}`}
              defaultValue={item.rating}
              precision={0.5}
              size="small"
            />
          </Box>
        </Grid>

        {/* === Price === */}
        <Grid
          size={{ xs: 6, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-end", md: "center" },
            alignItems: "center",
          }}
        >
          <Chip
            label={`₹${item.price}`}
            color="success"
            variant="outlined"
            sx={{ px: 2 }}
          />
        </Grid>

        {/* === Rating (visible only on desktop) === */}
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Rating
            name={`rating-desktop-${item.id}`}
            defaultValue={item.rating}
            precision={0.5}
          />
        </Grid>

        {/* === Add To Cart === */}
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-end", md: "flex-end" },
            mt: { xs: 1, md: 0 },
          }}
        >
          <AddToCart
            id={item.id}
            itemName={item.name}
            imageUrl={item.image}
            price={item.price}
            restaurantName={restaurant.name}
          />
        </Grid>
      </Grid>
    </Grid>
  ))}
        </Grid>
      )}
    </Container>
  );
};

export default RestaurantDetailsPage;
