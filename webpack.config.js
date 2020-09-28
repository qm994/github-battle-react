const path = require('path');

module.exports = {
    // the entry file to kick off everything and we are going to bundle all the modules here
    entry: './app/index.js',
    output: {
        // the path represent where we are going to put those bundled files
        path: path.resolve(__dirname, 'dist'),
        // all the bundled files put this file
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            // while we use webpack, anytime we see the files end in js, we use 
            // babel-loader to do the transformation
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
        ]
    },
    mode: 'development'
};
