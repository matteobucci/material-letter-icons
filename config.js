// Package configuration
module.exports = {
    generator: {
        // Alphabet characters to generate, as string
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    src: {
        svg: {
            // Base SVG files containing '{x}' and '{c}' placeholders
            circle: 'src/svg/circle.svg',
            square: 'src/svg/square.svg'
        }
    },
    dist: {
        // Distribution output directory
        path: 'dist/',
        svg: {
            // SVG icon output directory
            outputPath: 'svg/',
        },
        png: {
            // PNG icon output directory
            outputPath: 'png/',
            
            // PNG icon output dimensions
            dimensions: {
                width: 512,
                height: 512
            }
        }
    }
};