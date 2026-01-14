/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Anti-Gravity custom palette
                gravity: {
                    50: '#f0f7ff',
                    100: '#e0effe',
                    200: '#bae0fd',
                    300: '#7cc8fb',
                    400: '#36aaf5',
                    500: '#0c8ee6',
                    600: '#0070c4',
                    700: '#015a9f',
                    800: '#064c83',
                    900: '#0b406d',
                    950: '#072849',
                },
                glass: {
                    light: 'rgba(255, 255, 255, 0.1)',
                    DEFAULT: 'rgba(255, 255, 255, 0.05)',
                    dark: 'rgba(0, 0, 0, 0.3)',
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(12, 142, 230, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(12, 142, 230, 0.6)' },
                },
            },
        },
    },
    plugins: [],
}
