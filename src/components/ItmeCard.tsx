import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import AddToCart from "./AddToCart";

interface Props {
  id?: number;
  imageUrl?: string;
  itemName?: string;
  price?: number;
  restaurantName?: string;
}

const ItemCard = ({ id, imageUrl, itemName, price, restaurantName }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (id && price) {
      navigate(`/food/${id}`);
    } else if (restaurantName) {
      navigate(`/restaurant/${restaurantName}`);
    }
  };

  return (
    <Card
      sx={{
        borderRadius: 5,
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.02)" },
      }}
      onClick={handleCardClick}
    >
      <CardMedia sx={{ borderRadius: 5 }} component="img" alt={itemName || restaurantName} height="140" image={imageUrl || "/foodImages/foodplaceholder.jpg"} />
      <CardContent>
        <Typography gutterBottom sx={{ textWrap: "nowrap" }}>
          {itemName || restaurantName}
        </Typography>
      </CardContent>

      {price && (
        <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ color: "gray" }} variant="h6">
            ₹{price}
          </Typography>
          <AddToCart id={id} itemName={itemName} imageUrl={imageUrl} price={price} restaurantName={restaurantName} />
        </CardActions>
      )}
    </Card>
  );
};

export default ItemCard;
