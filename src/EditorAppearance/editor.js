const color = require('../base/color')

module.exports = {
    // code main
    "editor.background": color['content'],
    "editor.foreground": color['whiteGray'],
    // find Match attr
    "editor.findMatchBackground": color['blackGrayLowerLight'],
    "editor.findMatchHighlightBackground": color['blackGrayLight'],

    // mouse hover color 
    "editor.hoverHighlightBackground": color['blackGrayLight'],

    // editor selected attr 
    "editor.selectionBackground": color['blackGrayLight'],
    "editor.selectionForeground": color['white'],
    "editor.selectionHighlightBackground": color['blackGrayLight'],
    "editor.wordHighlightBackground":  color['blackGrayLight'],
    "editor.wordHighlightStrongBackground": color['blackGrayLight'],
}