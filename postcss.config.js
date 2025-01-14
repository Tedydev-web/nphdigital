module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
            stage: 3,
            features: {
                'nesting-rules': true,
                'custom-properties': false,
                'custom-media-queries': true
            }
        },
        'cssnano': process.env.NODE_ENV === 'production' ? {
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
                normalizeWhitespace: false,
            }]
        } : false
    }
}; 