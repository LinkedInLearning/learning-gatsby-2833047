module.exports = {
  plugins: {
    "postcss-preset-env": {
      importFrom: "src/styles/global.module.css",
      features: {
        "custom-properties": true, // already enabled by default
        "custom-media-queries": true,
        "custom-selectors": true,
      },
    },
  },
}
