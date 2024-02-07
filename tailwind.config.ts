import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens : {
        "mobile" : "350px",
        'tablet': '670px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      backgroundColor : {
        'primary' : '#DF6724'
      },
      backgroundImage: {
        'background-hero' : "url('/assets/cover.jpg')"
      },
    },
  },
  plugins: [],
}
export default config