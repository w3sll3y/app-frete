module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["."],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
          ],
          alias: {
            '@components': "./src/components",
            '@screens': "./src/screens",
            '@assets': "./src/assets",
            'underscore': "lodash"
          }
        }
      ]
    ]
  };
};
