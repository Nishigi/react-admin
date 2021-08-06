const path = require('path');
module.exports = {
    // publicPath: '/',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
        '@': path.resolve(__dirname, 'src')
    },
    module: {
        rules: []
    },
    plugins: [

    ],
    devServer: {
        port: 9000,
        open: true
    }
}