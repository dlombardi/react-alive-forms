const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    src: path.join(__dirname, "src"),
    dist: path.join(__dirname, "dist"),
    test: path.join(__dirname, "test")
};

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${paths.src}/index.html`,
    filename: "index.html",
    inject: "body"
});

module.exports = {
    entry: {
        bundle: `${paths.src}/index.js`
    },
    output: {
        path: paths.dist,
        filename: "bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [paths.src, paths.test],
                loader: "babel-loader",
                exclude: /node_modules/
            },
            { loader: "style-loader!css-loader", test: /\\.css$/ }
        ]
    },
    externals: {
        cheerio: "window",
        "react/addons": "react",
        "react/lib/ExecutionEnvironment": "react",
        "react/lib/ReactContext": "react"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.dist
    },

    plugins: [HtmlWebpackPluginConfig]
};
