const {environment} = require('@rails/webpacker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const lessLoader = {
    test: /\.less$/,
    use: [
        MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
        }, {
            loader: 'less-loader',
            options: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#13c2c2',
                    },
                    javascriptEnabled: true,
                },
            },
        }],
}

environment.loaders.prepend('less', lessLoader)

module.exports = environment;
