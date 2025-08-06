import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          plum: '#7C3A8D',
          plumLight: '#A259B5',
          peach: '#FFB6B9',
          peachLight: '#FFE6D1',
        },
        analysis: {
          winter: '#2C3E50',
          spring: '#E67E22',
          summer: '#3498DB',
          autumn: '#D35400',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFE6D1 0%, #FFFFFF 60%, #FFFFFF 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'hover-scale': 'hover-scale 0.3s ease-in-out',
      },
      keyframes: {
        'hover-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;