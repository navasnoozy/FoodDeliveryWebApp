import { Typography } from "@mui/material";
import { motion, stagger } from "motion/react";

const BannerHeading = ({ text }: { text: string }) => {
  // Split text into words for staggered animation
  const words = text.split(" ");

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: stagger(0.08, { startDelay: 0.1 }),
          },
        },
      }}
      // Add subtle continuous breathing animation
      whileInView={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        scale: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ marginRight: "8px" }}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              x: -10,
              scale: 0.9,
            },
            visible: {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              transition: {
                type: "spring",
                damping: 15,
                stiffness: 120,
              },
            },
          }}
          // Add continuous subtle float for each word
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.2,
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
              fontWeight: 800,
              fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
              background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 50%, #c44569 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 4px 12px rgba(255, 107, 107, 0.3)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              display: "inline-block",
              position: "relative",
              // Add subtle shimmer effect
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                animation: "shimmer 3s infinite",
              },
              "@keyframes shimmer": {
                "0%": {
                  transform: "translateX(-100%)",
                },
                "100%": {
                  transform: "translateX(100%)",
                },
              },
            }}
          >
            {word}
          </Typography>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BannerHeading;