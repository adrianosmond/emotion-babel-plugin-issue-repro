module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ]
  ],
  plugins: ["@emotion"],
};
