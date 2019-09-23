const color = require('../base/color')

module.exports = [
    {
        "name": "variable",
        "scope": [
            "variable",
            "string constant.other.placeholder",
            "constant.other"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Function parameter variable",
        "scope": [
            "variable.parameter"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": color['orange']
        }
    },
    // had more bugs
    // {
    //     "name": "Function parameters in the function color variable",
    //     "scope": [
    //         "variable.other.object",
    //         "variable.other.object.property",
    //         "variable.other.property",
    //         "variable.other.readwrite",
    //         "meta.function-call",
    //     ],
    //     "settings": {
    //         "foreground": color['orange']
    //     }
    // },
    {
        "name": "Function this variable",
        "scope": [
            "variable.language"
        ],
        "settings": {
            "foreground": color['purple']
        }
    },
    {
        "name": "types",
        "scope": [
            "meta.return.type.ts",
            "meta.type.annotation",
            "meta.interface.ts",
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "scope": [
            "variable.other.constant.property",
            "variable.other.constant.object.property."
        ],
        "settings": {
            "foreground": color['purple']
        }
    }
]
    
