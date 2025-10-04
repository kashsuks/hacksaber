export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        pulseColor: {
          '0%, 100%': { backgroundColor: '#3b82f6' },
          '50%': { backgroundColor: '#ef4444' },
        },
      },
      animation: {
        pulseColor: 'pulseColor 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
