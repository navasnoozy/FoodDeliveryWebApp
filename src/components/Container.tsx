import { Card, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  heading?: string;
  children: ReactNode;
}

const Container = ({ heading, children }: Props) => {
  return (
    <Card
    className="////////"
      variant="outlined"
      sx={{
        p: 4,
        width: { xs: "90%", sm: "fit-content" },
        minWidth: { sm: "400px" },
        borderRadius: "8px",
        display: "inline-block",
        // matching glow color for your theme (#f44336)
        boxShadow: "0 1px 8px rgba(244, 67, 54, 0.6)",
        border: "1px solid rgba(244, 67, 54, 0.5)", // subtle border to match glow
      }}
    >
      <Typography sx={{ fontSize: 30 }} fontWeight="bold" mb={3} color="#f44336">
        {heading}
      </Typography>
      {children}
    </Card>
  );
};

export default Container;
