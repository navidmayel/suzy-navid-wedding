/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-terra": "#D46A53",
        "light-terra": "#F29979",
      },
    },
  },
  plugins: [],
};
