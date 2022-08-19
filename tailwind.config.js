const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                waves: 'waves 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
            },
            keyframes: {
                waves: {
                    '0%': {
                        transform: 'translate3d(-90px, 0, 0)',
                    },
                    '100%': {
                        transform: 'translate3d(85px, 0, 0)',
                    },
                },
            },
            animationDelay: {
                1000: '-2s',
                2000: '-3s',
                3000: '-4s',
                4000: '-5s',
            },
            animationDuration: {
                1000: '7s',
                2000: '10s',
                3000: '13s',
                4000: '20s',
            },
            fontFamily: {
                nunito: [
                    'Nunito',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
            },
        },
        screens: {
            xs: '768px',
            sm: '900px',
            md: '1024px',
            lg: '1280px',
            xl: '1440px',
        },
    },
    plugins: [
        require('tailwindcss-animation'),
        require('tailwind-scrollbar'),
        require('tailwind-gradient-mask-image'),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-gradient': (angle) => ({
                        'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
                    }),
                },
                {
                    values: Object.assign(theme('bgGradientDeg', {}), {
                        10: '10deg',
                        15: '15deg',
                        20: '20deg',
                        25: '25deg',
                        30: '30deg',
                        45: '45deg',
                        60: '60deg',
                        90: '90deg',
                        120: '120deg',
                        135: '135deg',
                    }),
                }
            );
        }),
    ],
};
