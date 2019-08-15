const tsImportPluginFactory = require('ts-import-plugin');

module.exports = async ({ config, mode }) => {
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
    options: {
      getCustomTransformers: () => ({
        before: [tsImportPluginFactory({
          libraryName: 'antd-mobile',
          style: true
        })]
      }),
    },
  });

  config.module.rules.push({
    loader: 'babel-loader',
    exclude: /node_modules/,
    test: /\.(js|jsx)$/,
    options: {
      presets: ['@babel/react'],
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ['@babel/plugin-proposal-class-properties'],
        ['import', {
          libraryName: 'antd-mobile',
          style: true
        }]
      ]
    },
  });

  // remove test of css, reference: https://blog.csdn.net/sinat_33312523/article/details/72566004 -> https://github.com/webpack-contrib/css-loader/issues/352
  config.module.rules.push({
    test: /\.less$/,
    include: /node_modules/,
    use: [{
      loader: 'style-loader' // creates style nodes from JS strings
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
      options: { javascriptEnabled: true, sourceMap: true },
    }],
  })

  config.module.rules.push({
    test: /\.(css|less)$/,
    exclude: /node_modules/,
    use: [{
      loader: 'style-loader' // creates style nodes from JS strings
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
      options: {
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      }
    }, {
      loader: 'less-loader', // compiles Less to CSS
      options: { javascriptEnabled: true, sourceMap: true },
    }],
  });

  return config;
};
