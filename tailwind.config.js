const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            spacing: {
                '350px': '350px',
                '450px': '450px',
                '500px': '500px',
                '550px': '550px'
            },
            colors: {
                border: '#e8e9ed',
                input: '#e8e9ed',
                ring: '#a6adbb',
                background: '#ffffff',
                foreground: '#1d2029',
                primary: {
                    DEFAULT: '#1a73e8',
                    foreground: '#ffffff'
                },
                secondary: {
                    DEFAULT: '#1ae8e8',
                    foreground: '#ffffff'
                },
                tertiary: {
                    DEFAULT: '#1e00ee',
                    foreground: '#ffffff'
                },
                topmenu: {
                    DEFAULT: '#1d244a',
                    foreground: '#ffffff'
                },
                submenu: {
                    DEFAULT: '#f7f9ff',
                    foreground: '#ffffff'
                },
                destructive: {
                    DEFAULT: '#ff0000',
                    foreground: '#f7f9fc'
                },
                muted: {
                    DEFAULT: '#f5f7fa',
                    foreground: '#767b86'
                },
                accent: {
                    DEFAULT: '#f5f7fa',
                    foreground: '#1d2029'
                },
                popover: {
                    DEFAULT: '#ffffff',
                    foreground: '#1d2029'
                },
                card: {
                    DEFAULT: '#0c0f16',
                    foreground: '#e8e9ed'
                }
            },
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans]
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'tracking-in-expand':
                    'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
                'tracking-out-contract':
                    'tracking-out-contract 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both'
            },
            keyframes: {
                'tracking-in-expand': {
                    '0%': {
                        'letter-spacing': '-.5em',
                        opacity: '0'
                    },
                    '40%': {
                        opacity: '.6'
                    },
                    to: {
                        opacity: '1'
                    }
                },
                'tracking-out-contract': {
                    '0%,50%': {
                        opacity: '1'
                    },
                    to: {
                        'letter-spacing': '-.5em',
                        opacity: '0'
                    }
                }
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
}
