const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');

const compiler = webpack(
    Object.assign({}, config, {
        entry: ['webpack-hot-middleware/client', './src/index'],
        mode: 'development',
        plugins: (config.plugins || []).concat([new webpack.HotModuleReplacementPlugin()]),
    }),
);

const express = require('express');
const app = express();

app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler));

app.listen(3000, () => console.log('Example app listening on port 3000!'))