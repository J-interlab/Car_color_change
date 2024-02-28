const initialColors = {
    ABP: {
        diffuse: {
            r: 36 / 255,
            g: 36 / 255,
            b: 36 / 255
        },
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: .06
    },
    SWP: {
        diffuse: {
            r: 255 / 255,
            g: 255 / 255,
            b: 255 / 255
        },
        glossiness: 0.25,
        reflectivity: 0.55,
        emissive: {
            r: 0 / 255,
            g: 0 / 255,
            b: 0 / 255
        },
        clearcoat: .28
    },
    CRS: {
        diffuse: {
            r: 120 / 255,
            g: 0 / 255,
            b: 27 / 255
        },
        emissive: {
            r: 24 / 255,
            g: 3 / 255,
            b: 4 / 255
        },
        clearcoat: .06
    },
    KLM: {
        diffuse: {
            r: 150 / 255,
            g: 150 / 255,
            b: 150 / 255
        },
        glossiness: 0.2,
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: 0.001
    },
    DU3: {
        diffuse: {
            r: 0,
            g: 40 / 255,
            b: 114 / 255
        },
        metalic: 1,
        emissive: {
            r: 6 / 255,
            g: 16 / 255,
            b: 25 / 255
        },
        clearcoat: .06
    },
    UD: {
        diffuse: {
            r: 255 / 255,
            g: 250 / 255,
            b: 250 / 255
        },
        glossiness: 0.25,
        reflectivity: 0.55,
        emissive: {
            r: 1 / 255,
            g: 0 / 255,
            b: 0 / 255
        },
        clearcoat: .28
    },
    KLG: {
        diffuse: {
            r: 105 / 255,
            g: 105 / 255,
            b: 105 / 255
        },
        emissive: {
            r: 17 / 255,
            g: 17 / 255,
            b: 17 / 255
        },
        clearcoat: 0.06
    },
    A7A: {
        diffuse: {
            r: 180 / 255,
            g: 72 / 255,
            b: 0 / 255
        },
        emissive: {
            r: 43 / 255,
            g: 17 / 255,
            b: 0
        },
        clearcoat: .06
    },
    GWP: {
        diffuse: {
            r: 250 / 255,
            g: 250 / 255,
            b: 255 / 255
        },
        glossiness: 0.25,
        reflectivity: 0.55,
        emissive: {
            r: 0 / 255,
            g: 0 / 255,
            b: 1 / 255
        },
        clearcoat: .28
    },
    KDG: {
        diffuse: {
            r: 74 / 255,
            g: 75 / 255,
            b: 77 / 255
        },
        glossiness: 0.2,
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: 0.06
    },
    BNB: {
        diffuse: {
            r: 16 / 255,
            g: 68 / 255,
            b: 139 / 255
        },
        metalic: 1,
        emissive: {
            r: 0 / 255,
            g: 0 / 255,
            b: 0 / 255
        },
        clearcoat: .06
    },
    A6R: {
        diffuse: {
            r: 155 / 255,
            g: 40 / 255,
            b: 44 / 255
        },
        emissive: {
            r: 14 / 255,
            g: 4 / 255,
            b: 4 / 255
        },
        clearcoat: .06
    },
    QYG: {
        diffuse: {
            r: 184 / 255,
            g: 175 / 255,
            b: 149 / 255
        },
        emissive: {
            r: 20 / 255,
            g: 19 / 255,
            b: 16 / 255
        },
        clearcoat: .1
    },
    HW2: {
        diffuse: {
            r: 237 / 255,
            g: 246 / 255,
            b: 253 / 255
        },
        glossiness: 0.25,
        reflectivity: 0.5,
        emissive: {
            r: 17 / 255,
            g: 17 / 255,
            b: 17 / 255
        },
        clearcoat: .2
    },
    WD: {
        diffuse: {
            r: 255 / 255,
            g: 250 / 255,
            b: 250 / 255
        },
        glossiness: 0.25,
        reflectivity: 0.5,
        emissive: {
            r: 24 / 255,
            g: 23 / 255,
            b: 23 / 255
        },
        clearcoat: .2
    },
    CSS: {
        diffuse: {
            r: 115 / 255,
            g: 116 / 255,
            b: 119 / 255
        },
        glossiness: 0.3,
        emissive: {
            r: 21 / 255,
            g: 21 / 255,
            b: 21 / 255
        },
        clearcoat: 0.07
    },
    HBG: {
        diffuse: {
            r: 73 / 255,
            g: 81 / 255,
            b: 85 / 255
        },
        glossiness: 0.35,
        emissive: {
            r: 20 / 255,
            g: 23 / 255,
            b: 23 / 255
        },
        clearcoat: 0.06
    },
    "1K": {
        diffuse: {
            r: 22 / 255,
            g: 22 / 255,
            b: 22 / 255
        },
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: .06
    },
    AA9: {
        diffuse: {
            r: 128 / 255,
            g: 30 / 255,
            b: 41 / 255
        },
        emissive: {
            r: 24 / 255,
            g: 8 / 255,
            b: 10 / 255
        },
        clearcoat: .07
    },
    B3L: {
        diffuse: {
            r: 23 / 255,
            g: 82 / 255,
            b: 125 / 255
        },
        metalic: 1,
        glossiness: 0.42,
        emissive: {
            r: 8 / 255,
            g: 10 / 255,
            b: 13 / 255
        },
        clearcoat: .07
    },
    G2Y: {
        diffuse: {
            r: 165 / 255,
            g: 138 / 255,
            b: 38 / 255
        },
        glossiness: 0.42,
        emissive: {
            r: 32 / 255,
            g: 27 / 255,
            b: 0
        },
        clearcoat: .07
    },
    RNG: {
        diffuse: {
            r: 187 / 255,
            g: 66 / 255,
            b: 24 / 255
        },
        glossiness: 0.42,
        emissive: {
            r: 43 / 255,
            g: 17 / 255,
            b: 0
        },
        clearcoat: .07
    },
    EXG: {
        diffuse: {
            r: 82 / 255,
            g: 100 / 255,
            b: 87 / 255
        },
        emissive: {
            r: 0 / 255,
            g: 0 / 255,
            b: 0 / 255
        },
        clearcoat: .07
    },
    "4SS": {
        diffuse: {
            r: 153 / 255,
            g: 153 / 255,
            b: 153 / 255
        },
        emissive: {
            r: 5 / 255,
            g: 5 / 255,
            b: 5 / 255
        },
        clearcoat: 0.1
    },
    ABT: {
        diffuse: {
            r: 59 / 255,
            g: 59 / 255,
            b: 61 / 255
        },
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: 0.06
    },
    BE2: {
        diffuse: {
            r: 71 / 255,
            g: 61 / 255,
            b: 51 / 255
        },
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: 0.06
    },
    B4U: {
        diffuse: {
            r: 27 / 255,
            g: 45 / 255,
            b: 63 / 255
        },
        emissive: {
            r: 2 / 255,
            g: 4 / 255,
            b: 5 / 255
        },
        clearcoat: 0.06
    },
    CR5: {
        diffuse: {
            r: 177 / 255,
            g: 26 / 255,
            b: 21 / 255
        },
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: 0.07
    },
    M4B: {
        diffuse: {
            r: 53 / 255,
            g: 90 / 255,
            b: 124 / 255
        },
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: 0.07
    }
}

export default initialColors;