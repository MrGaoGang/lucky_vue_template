module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 3 versions", "ie>=9"]
        },
        useBuiltIns: "entry",
        debug: false
      }
    ],
    "@vue/babel-preset-jsx"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-object-rest-spread",
    "transform-vue-jsx",
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css"
      },
      "ant-design-vue"
    ],
    [
      "import",
      {
        libraryName: "iview",
        libraryDirectory: "src/components"
      }
    ]
  ]
};
