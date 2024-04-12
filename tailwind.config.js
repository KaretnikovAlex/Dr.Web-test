/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile-1': '320px',
        // => @media (min-width: 320px) { ... }

        'mobile-2': '480px',
        // => @media (min-width: 480px) { ... }

        'mobile-3': '768px',
        // => @media (min-width: 768px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'large-desktop': '1950px',
        // => @media (min-width: 1950px) { ... }
      },

    },
    plugins: [],
  }
}
