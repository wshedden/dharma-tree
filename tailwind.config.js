/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.4), 0 12px 35px rgba(124, 58, 237, 0.24)',
      },
      backgroundImage: {
        'radial-noise':
          'radial-gradient(circle at 30% 20%, rgba(56,189,248,0.12), transparent 40%), radial-gradient(circle at 70% 10%, rgba(168,85,247,0.12), transparent 35%), radial-gradient(circle at 50% 80%, rgba(79,70,229,0.08), transparent 45%)',
      },
    },
  },
  plugins: [],
}
