import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#06070d',
          900: '#0b1020',
          800: '#11182b',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(99, 102, 241, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
