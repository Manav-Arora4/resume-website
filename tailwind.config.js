/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        panel: 'rgba(13, 25, 43, 0.74)',
        line: 'rgba(148, 163, 184, 0.22)',
        cyan: '#2dd4bf',
        sky: '#38bdf8',
        violet: '#a78bfa',
        amber: '#fbbf24'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 24px 70px rgba(0, 0, 0, 0.32)'
      }
    }
  },
  plugins: []
};
