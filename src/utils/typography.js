import Typography from "typography"

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: '1.50',
    headerFontFamily: ['Lato', 'sans-serif'],
    headerWeight: '900',
    bodyFontFamily: ['Lato', 'sans-serif'],
    googleFonts: [{
        name: 'Lato',
        styles: [
            '400',
            '900',
        ],
    }],
})

export default typography