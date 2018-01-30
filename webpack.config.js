const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {

    entry: {
        "app/main": "./src/main/main.ts",
        "app/renderer": "./src/renderer/index.tsx",
        "test/index": "./test/index.ts"
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "/build")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    target: "electron",
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets', to: "app/assets" },
            { from: 'src/renderer/index.html', to: 'app/index.html' },
            { from: 'package.json', to: "app/package.json" },
            { from: 'readme.md', to: "app/readme.md" },
            { from: 'license', to: "app/license" }
        ])],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {

    },
};
