
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                'bounce-slow': 'bounce 3s infinite', // Example custom animation
                'fade-in': 'fadeIn 2s ease-in-out', // Custom fade-in animation
            },
            keyframes: {
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
