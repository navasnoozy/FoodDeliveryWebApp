import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface GlowingBorderProps {
  isActive?: boolean;
  borderRadius?: number;
  glowColor?: string;
  children: React.ReactNode;
}

const GlowingBorder = ({ 
  isActive = true, 
  borderRadius = 40, 
  glowColor = "#1976d2",
  children 
}: GlowingBorderProps) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Glowing Border Animation */}
      {isActive && (
        <motion.div
          style={{
            position: "absolute",
            inset: -2,
            borderRadius: `${borderRadius}px`,
            padding: "2px",
            background: `conic-gradient(
              from var(--angle),
              transparent 70%,
              ${glowColor} 80%,
              ${glowColor} 85%,
              transparent 95%
            )`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: 1,
          }}
          animate={{
            "--angle": ["0deg", "360deg"],
          } as any}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Soft Glow Effect */}
      {isActive && (
        <motion.div
          style={{
            position: "absolute",
            inset: -8,
            borderRadius: `${borderRadius}px`,
            background: `conic-gradient(
              from var(--glow-angle),
              transparent 60%,
              ${glowColor}20 75%,
              ${glowColor}30 80%,
              transparent 90%
            )`,
            filter: "blur(12px)",
            opacity: 0.6,
            pointerEvents: "none",
            zIndex: 0,
          }}
          animate={{
            "--glow-angle": ["0deg", "360deg"],
          } as any}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default GlowingBorder;