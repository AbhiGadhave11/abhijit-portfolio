import type { Config } from 'tailwindcss'


const config: Config = {
darkMode: 'class',
content: [
'./app/**/*.{ts,tsx}',
'./components/**/*.{ts,tsx}',
],
theme: {
extend: {
container: { center: true, padding: '1rem' },
colors: {
brand: {
DEFAULT: '#00e5ff',
50: '#E6FDFF',
100: '#CCFBFF',
200: '#99F7FF',
300: '#66F2FF',
400: '#33EEFF',
500: '#00E5FF',
600: '#00B7CC',
700: '#008999',
800: '#005B66',
900: '#002D33',
},
},
boxShadow: {
soft: '0 10px 30px rgba(0, 229, 255, 0.15)',
},
backgroundImage: {
'radial-dots': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
},
},
},
plugins: [],
}


export default config