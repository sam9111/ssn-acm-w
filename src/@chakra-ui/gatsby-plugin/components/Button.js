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
  },

  variants: {
    solid: {
      bgGradient: "linear-gradient(90deg, #56C1FD 0%, #2C88BC 100%);",
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
