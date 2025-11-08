import { Typography } from "@mui/material";
import type { ReactNode } from "react";
import Paper from "@mui/material/Paper";

interface Props {
  heading?: string;
  children: ReactNode;
}

const PaperCard = ({ heading, children }: Props) => {
  return (
    <Paper>
      {heading && (
        <Typography sx={{ fontSize: 30 }} fontWeight="bold" mb={3} color="#f44336">
          {heading}
        </Typography>
      )}
      {children}
    </Paper>
  );
};

export default PaperCard;
