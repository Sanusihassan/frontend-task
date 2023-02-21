module.exports = {
  plugins: {
    plugins: {
      postcssNested: require("postcss-nested")({ bubble: ["phone"] }),
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
