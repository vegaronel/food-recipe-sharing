

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		animation: {
  			'slide-in': 'slideIn 0.3s ease-out',
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'fade-out': 'fadeOut 0.5s ease-in-out'
  		},
  		keyframes: {
  			slideIn: {
  				'0%': {
  					transform: 'translateY(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			fadeOut: {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Raleway',
  				'sans'
  			],
  			serif: [
  				'EB Garamond',
  				'serif'
  			]
  		},
  		backgroundImage: {
  			share: "url('./assets/recipe-book.png')",
  			"hero-pattern": "url('/img/hero-pattern.svg')",
  		},
  		backgroundColor: {
  			primary: '#FAF9F6',
  			secondary: '#FFD97D',
  			accent: '#FF6F61',
  			'primary-hover': '#EAE9E6',
  			'secondary-hover': '#FFC857',
  			'accent-hover': '#FF5F51'
  		},
  		colors: {
  			primary: '#4A4A4A',
  			heading: '#ff5848',
  			muted: '#767676',
  			link: '#4CAF50',
  			error: '#D32F2F',
  			warning: '#FFA000 ',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontSize: {
  			sm: [
  				'14px',
  				'20px'
  			],
  			base: [
  				'16px',
  				'24px'
  			],
  			lg: [
  				'18px',
  				'28px'
  			],
  			xl: [
  				'20px',
  				'28px'
  			],
  			'2xl': [
  				'24px',
  				'32px'
  			],
  			'3xl': [
  				'30px',
  				'36px'
  			],
  			'4xl': [
  				'36px',
  				'40px'
  			],
  			'5xl': [
  				'48px',
  				'1'
  			],
  			'6xl': [
  				'60px',
  				'1'
  			],
  			'7xl': [
  				'72px',
  				'1'
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
