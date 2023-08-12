/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:'#2b2b2b'
      },
      backgroundImage: {
        'my-image': "url('https://img.freepik.com/free-photo/sun-clouds_1204-19.jpg?w=740&t=st=1691779518~exp=1691780118~hmac=1b15cc235c6aac63cc13a7e4229db10c7e0df7d1fb9a09abd1acd52ca902c95a')",
      },
      height: {
        '100vh': '100vh',
      }
    },
  },
  plugins: [],
}

