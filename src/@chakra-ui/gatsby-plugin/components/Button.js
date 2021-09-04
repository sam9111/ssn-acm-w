const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    md: {
      fontSize: "md",
      px: 7, // <-- these values are tokens from the design system
      py: 3, // <-- these values are tokens from the design system
    },
    lg: {
      fontSize: "lg",
      px: 14, // <-- these values are tokens from the design system
      py: 3, // <-- these values are tokens from the design system
    },
    xl: {
      fontSize: "xl",
      px: 28,
      py: 4,
    },
  },

  variants: {
    solid: {
      bgGradient: "linear-gradient(to-r,blue.300,blue.500,blue.700,black);",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

export default Button;
