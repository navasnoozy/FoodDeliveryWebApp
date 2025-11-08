//src/features/Home/FoodCard.tsx
import { Fab } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  imageUrl?: string;
  itemName?: string;
  price?: number;
  restaurantName?: string;
}

const FoodCard = ({ imageUrl, itemName, price, restaurantName }: Props) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
      <CardMedia sx={{ borderRadius: 5 }} component="img" alt="green iguana" height="140" image={imageUrl ? `/foodImages/${imageUrl}.png` : "/foodplaceholder.png"} />
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{textWrap:'nowrap'}} >
          {itemName || restaurantName}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{color:'gray'}} variant="h6">₹{price}</Typography>
        <Fab color="secondary" aria-label="edit" variant="extended" sx={{ textWrap: "nowrap", fontSize: "12px" }}>
          Add To Cart
        </Fab>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
