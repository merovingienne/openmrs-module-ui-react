const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "../dev/index.js"),
    output: {
        filename: 'openmrs-ui-react.js',
        path: path.resolve(__dirname, '../dev/')
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx|es6)$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".es6"]
    }
};