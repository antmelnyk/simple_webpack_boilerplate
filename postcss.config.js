// Uncomment if statement to disable minifying and prefixing during development!

// if (process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('cssnano')
        ]
    }
// }
