import { Box, IconButton, Tooltip } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllFoods, sortByPrice } from "../../store/slice/foodSlice";
import { motion, AnimatePresence } from "framer-motion";

const MotionIconButton = motion(IconButton);

const SortComponent = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");

  const handleToggleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    dispatch(sortByPrice(newOrder));
  };

  const handleClear = () => {
    setSortOrder("");
    dispatch(getAllFoods());
  };

  // Icon rotation variants
  const sortIconVariants = {
    asc: { rotate: 0 },
    desc: { rotate: 180 },
  };

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Tooltip title={sortOrder === "asc" ? "Sort: Low to High" : "Sort: High to Low"}>
        <MotionIconButton
          onClick={handleToggleSort}
          color={sortOrder ? "primary" : "default"}
          sx={{
            border: "1px solid",
            borderColor: sortOrder ? "primary.main" : "grey.400",
          }}
          variants={sortIconVariants}
          animate={sortOrder || "asc"}
          initial="asc"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <SwapVertIcon />
        </MotionIconButton>
      </Tooltip>

      <AnimatePresence mode="wait">
        {sortOrder && (
          <motion.div
            key="clear-button"
            initial={{ opacity: 0, x: -20, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smooth entry
              }
            }}
            exit={{ 
              opacity: 0, 
              x: -20, 
              scale: 0.5,
              transition: {
                duration: 0.25,
                ease: [0.4, 0, 1, 1], // Smooth exit
              }
            }}
          >
            <Tooltip title="Clear Sort">
              <MotionIconButton
                onClick={handleClear}
                color="error"
                sx={{
                  border: "1px solid",
                  borderColor: "error.main",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ClearIcon />
              </MotionIconButton>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default SortComponent;
