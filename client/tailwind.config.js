import { features } from 'process';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
		fontFamily: {
			sans:['Raleway', 'sans'],
			serif: ['EB Garamond', 'serif']
		},
    backgroundImage: {
      'share' : "url('./assets/recipe-book.png')",
      'hero-pattern': "url('/img/hero-pattern.svg')",
    },
		backgroundColor: {
            primary: "#FAF9F6",
            secondary: "#FFD97D",
            accent: "#FF6F61",
            'primary-hover': "#EAE9E6", // Add hover state for primary
            'secondary-hover': "#FFC857", // Add hover state for secondary
            'accent-hover': "#FF5F51", // Add hover state for accent
        }, 
  		colors: {
  			primary:'#4A4A4A',
			heading:'#ff5848',
			muted:'#767676',
			link:'#4CAF50',
			error: '#D32F2F',
			warning: '#FFA000 '
  		},
		  fontSize: {
            'sm': ['14px', '20px'],
            'base': ['16px', '24px'],
            'lg': ['18px', '28px'],
            'xl': ['20px', '28px'],
            '2xl': ['24px', '32px'],
            '3xl': ['30px', '36px'],
            '4xl': ['36px', '40px'],
            '5xl': ['48px', '1'],
            '6xl': ['60px', '1'],
            '7xl': ['72px', '1'],
        }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
