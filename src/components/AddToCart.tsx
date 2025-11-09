import { Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../store/slice/cartSlice";
import type { RootState } from "../store/store";
import notification from "./Notification";

interface AddToCartProps {
  id?: number;
  itemName?: string;
  imageUrl?: string;
  price?: number;
  restaurantName?: string;
}

const AddToCart = ({ id, itemName, imageUrl, price, restaurantName }: AddToCartProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering card click

    if (!isAuthenticated) {
      navigate("/signin");
      return;
    }

    if (id && price) {
      dispatch(
        addToCart({
          id,
          name: itemName || "",
          image: imageUrl?.split("/").pop()?.replace(".png", "") || "",
          price,
          category: "",
          restaurant: { name: restaurantName || "", image: "" },
        } as any)
      );
      notification(`${itemName} Added to Cart`);
    }
  };

  return (
    <Fab
      color="secondary"
      aria-label="add"
      variant="extended"
      sx={{
        textWrap: "nowrap",
        fontSize: "12px",
      }}
      onClick={handleAddToCart}
    >
      Add To Cart
    </Fab>
  );
};

export default AddToCart;
