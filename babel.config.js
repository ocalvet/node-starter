module.exports = function (api) {
    api.cache(true);
  
    const presets = ["@babel/preset-env"];
    const plugins = ["@babel/plugin-transform-runtime"];
    const ignore = [
      ".vscode",
      "test.http",
      "__mocks__",
      "/**test**",
      "coverage",
      "README.md",
      "jest.config.js",
      ".gitignore",
      "node_modules",
      "babel.config.js",
      "package.json",
      "package-lock.json",
      "npm-debug.log"
    ]
  
    return {
      presets,
      plugins,
      ignore
    };
  }