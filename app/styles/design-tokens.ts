// Simple design tokens
export const designTokens = {
  // Basic colors
  colors: {
    primary: "text-blue-600",
    white: "text-white",
    dark: "text-gray-900",
    bgWhite: "bg-white",
    bgGray: "bg-gray-50",
  },

  // Simple typography
  typography: {
    h1: "text-4xl font-bold",
    h2: "text-2xl font-bold",
    center: "text-center",
  },

  // Basic spacing
  spacing: {
    container: "max-w-4xl mx-auto px-4",
    section: "py-8",
  },
} as const;
