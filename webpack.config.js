const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/src/app.jsx'),

    output: {
        path: path.join(__dirname, '/client/dist/js'),
        filename: 'app.js',
    },

    module: {
        // 对于匹配的文件执行相应的loader操作
        loaders:[{
           test: /\.jsx?$/,
            include: path.join(__dirname, '/client/src'),
            loader: 'babel',
            query: {
                presets: ["react", "es2015"]
            },
        }],
    },
    watch: true
};

