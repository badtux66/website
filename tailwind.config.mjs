/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,mjs,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0F14',
        body: '#E5E7EB',
        muted: '#9CA3AF',
        accent: '#0EA5A4',
        line: '#27303B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '60rem',
      },
    },
  },
  plugins: [],
};
