module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],

    plugins: [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@routes": "./src/routes",
          "@storage": "./src/storage",
          "@types": "./src/types",
          "@utils": "./src/utils",
        },
      },
    ],
  };
};
