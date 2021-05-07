module.exports = {
    mode: process.env.NODE_ENV || 'production',
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        library: 'ReactCustomScrollbars',
        libraryTarget: 'umd'
    }
};
