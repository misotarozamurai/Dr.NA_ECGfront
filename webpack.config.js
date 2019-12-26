const path = require('path');
const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: enabledSourceMap,
                            sassOptions: {
                                indentWidth: 4,
                                includePaths: ['absolute/path/a', 'absolute/path/b'],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100 * 1024,
                            name: './img/[name].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.ini', '.js', '.sass'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src/js'),
            path.resolve(__dirname, 'src/style/css'),
            path.resolve(__dirname, 'src/style/img'),
        ]
    }
};