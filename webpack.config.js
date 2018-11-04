module.exports = {
    entry: __dirname + '/client/src/Components/index.jsx',	// Your starting file
    module: {
    rules: [
        { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['@babel/preset-env', '@babel/preset-react'],	
        }
        }
    ]
    },
    output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
    }
};