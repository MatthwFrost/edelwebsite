/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        blob: "blob 20s infinite",
      },
      keyframes:{
        blob: {
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":  {
            transform: "translate(-100px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(160px, -105px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
    fontFamily: {
      'sans': ['Rubik']
    },
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
    plugins: [require('flowbite/plugin')],
  }

}

