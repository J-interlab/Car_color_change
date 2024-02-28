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
            r: 233 / 255,
            g: 233 / 255,
            b: 233 / 255
        },
        emissive: {
            r: 75 / 255,
            g: 75 / 255,
            b: 75 / 255
        },
        glossiness: .35,
        reflectivity: .5,
        clearcoat: .18
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
            r: 124 / 255,
            g: 23 / 255,
            b: 37 / 255
        },
        emissive: {
            r: 44 / 255,
            g: 17 / 255,
            b: 20 / 255
        },
        clearcoat: .08
    },
    B3L: {
        diffuse: {
            r: 25 / 255,
            g: 85 / 255,
            b: 124 / 255
        },
        metalic: 1,
        glossiness: 0.35,
        emissive: {
            r: 21 / 255,
            g: 20 / 255,
            b: 36 / 255
        },
        clearcoat: .08
    },
    G2Y: {
        diffuse: {
            r: 165 / 255,
            g: 138 / 255,
            b: 38 / 255
        },
        glossiness: 0.35,
        emissive: {
            r: 46 / 255,
            g: 40 / 255,
            b: 4 / 255
        },
        clearcoat: .1
    },
    RNG: {
        diffuse: {
            r: 194 / 255,
            g: 70 / 255,
            b: 26 / 255
        },
        glossiness: 0.35,
        emissive: {
            r: 43 / 255,
            g: 17 / 255,
            b: 0
        },
        clearcoat: .10
    },
    EXG: {
        diffuse: {
            r: 88 / 255,
            g: 107 / 255,
            b: 91 / 255
        },
        emissive: {
            r: 15 / 255,
            g: 20 / 255,
            b: 18 / 255
        },
        clearcoat: .1
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
    },
    KCS: {
        diffuse: {
            r: 128 / 255,
            g: 128 / 255,
            b: 128 / 255
        },
        emissive: {
            r: 29 / 255,
            g: 29 / 255,
            b: 29 / 255
        },
        clearcoat: 0.08
    },
    M6Y: {
        diffuse: {
            r: 88 / 255,
            g: 68 / 255,
            b: 49 / 255
        },
        emissive: {
            r: 32 / 255,
            g: 23 / 255,
            b: 19 / 255
        },
        clearcoat: 0.08
    },
    USG: {
        diffuse: {
            r: 75 / 255,
            g: 84 / 255,
            b: 90 / 255
        },
        emissive: {
            r: 23 / 255,
            g: 30 / 255,
            b: 32 / 255
        },
        clearcoat: 0.08
    },
    "1C": {
        diffuse: {
            r: 40 / 255,
            g: 44 / 255,
            b: 71 / 255
        },
        emissive: {
            r: 6 / 255,
            g: 6 / 255,
            b: 20 / 255
        },
        clearcoat: .1
    },
    BE27: {
        diffuse: {
            r: 78 / 255,
            g: 68 / 255,
            b: 51 / 255
        },
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: 0.1
    },
    KCS7: {
        diffuse: {
            r: 146 / 255,
            g: 146 / 255,
            b: 146 / 255
        },
        emissive: {
            r: 32 / 255,
            g: 32 / 255,
            b: 32 / 255
        },
        clearcoat: 0.11
    },
    A6R7: {
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
        clearcoat: .1
    },
    GWP7: {
        diffuse: {
            r: 255 / 255,
            g: 255 / 255,
            b: 255 / 255
        },
        glossiness: 0.35,
        reflectivity: 0.5,
        emissive: {
            r: 48 / 255,
            g: 48 / 255,
            b: 48 / 255
        },
        clearcoat: .2
    },
    UD7: {
        diffuse: {
            r: 255 / 255,
            g: 255 / 255,
            b: 255 / 255
        },
        metalness: 0.7,
        glossiness: 0.35,
        reflectivity: 0.5,
        emissive: {
            r: 41 / 255,
            g: 41 / 255,
            b: 41 / 255
        },
        clearcoat: .22
    },
    KDG7: {
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
        clearcoat: 0.09
    },
    ABP7: {
        diffuse: {
            r: 22 / 255,
            g: 22 / 255,
            b: 22 / 255
        },
        emissive: {
            r: 10 / 255,
            g: 10 / 255,
            b: 10 / 255
        },
        clearcoat: .1,
        reflectivity: 1
    },
    SWP5: {
        diffuse: {
            r: 250 / 255,
            g: 250 / 255,
            b: 250 / 255
        },
        metalness: .978,
        glossiness: .35,
        reflectivity: .5,
        emissive: {
            r: 69 / 255,
            g: 69 / 255,
            b: 69 / 255,
            a: 0
        },
        clearcoat: .22
    },
    UD5: {
        diffuse: {
            r: 240 / 255,
            g: 238 / 255,
            b: 238 / 255
        },
        metalness: .978,
        glossiness: .35,
        reflectivity: .5,
        emissive: {
            r: 68 / 255,
            g: 66 / 255,
            b: 66 / 255
        },
        clearcoat: .22
    },
    AGT: {
        diffuse: {
            r: 61 / 255,
            g: 61 / 255,
            b: 61 / 255
        },
        metalness: .978,
        glossiness: .5,
        reflectivity: .5,
        emissive: {
            r: 24 / 255,
            g: 24 / 255,
            b: 24 / 255
        },
        clearcoat: .08
    },
    "4SS3": {
        diffuse: {
            r: 161 / 255,
            g: 161 / 255,
            b: 161 / 255
        },
        glossiness: .5,
        emissive: {
            r: 40 / 255,
            g: 40 / 255,
            b: 40 / 255
        },
        clearcoat: 0.12
    },
    KLG3: {
        diffuse: {
            r: 128 / 255,
            g: 128 / 255,
            b: 128 / 255
        },
        glossiness: .5,
        emissive: {
            r: 37 / 255,
            g: 37 / 255,
            b: 37 / 255
        },
        clearcoat: 0.08
    },
    ABP3: {
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
        clearcoat: .08
    },
    CR53: {
        diffuse: {
            r: 177 / 255,
            g: 26 / 255,
            b: 21 / 255
        },
        emissive: {
            r: 44 / 255,
            g: 6 / 255,
            b: 5 / 255
        },
        clearcoat: 0.08
    },
    DU35: {
        diffuse: {
            r: 0,
            g: 77 / 255,
            b: 163 / 255
        },
        metalic: 1,
        emissive: {
            r: 0 / 255,
            g: 14 / 255,
            b: 40 / 255
        },
        clearcoat: .09
    },
    B4U3: {
        diffuse: {
            r: 22 / 255,
            g: 56 / 255,
            b: 80 / 255
        },
        emissive: {
            r: 8 / 255,
            g: 14 / 255,
            b: 19 / 255
        },
        clearcoat: 0.08
    },
    BB2: {
        diffuse: {
            r: 7 / 255,
            g: 109 / 255,
            b: 155 / 255
        },
        emissive: {
            r: 8 / 255,
            g: 15 / 255,
            b: 19 / 255
        },
        clearcoat: 0.09
    },
    MGG: {
        diffuse: {
            r: 130 / 255,
            g: 130 / 255,
            b: 130 / 255
        },
        glossiness: 0.3,
        emissive: {
            r: 8 / 255,
            g: 8 / 255,
            b: 8 / 255
        },
        clearcoat: 0.01
    },
    JUG: {
        diffuse: {
            r: 129 / 255,
            g: 133 / 255,
            b: 120 / 255
        },
        emissive: {
            r: 21 / 255,
            g: 21 / 255,
            b: 21 / 255
        },
        clearcoat: 0.1
    },
    CGE:{diffuse:{r:68/255,g:87/255,b:80/255},emissive:{r:6/255,g:9/255,b:7/255},
    metalness:.98,glossiness:.35,reflectivity:0.5,clearcoat:.08},
    KLG11: {
        diffuse: {
            r: 82 / 255,
            g: 82 / 255,
            b: 82 / 255
        },
        emissive: {
            r: 17 / 255,
            g: 17 / 255,
            b: 17 / 255
        },
        clearcoat: 0.06
    },
    M4B11: {
        diffuse: {
            r: 52 / 255,
            g: 87 / 255,
            b: 117 / 255
        },
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: 0.07
    },
    H3R:{diffuse:{r:175/255,g:41/255,b:41/255},emissive:{r:17/255,g:4/255,b:4/255},clearcoat:.1},
    EWE:{diffuse:{r:89/255,g:102/255,b:80/255},emissive:{r:10/255,g:11/255,b:9/255},clearcoat:.1},
    PLU:{diffuse:{r:89/255,g:126/255,b:129/255},emissive:{r:9/255,g:13/255,b:13/255},clearcoat:.08},
    KLG10: {
        diffuse: {
            r: 187 / 255,
            g: 186 / 255,
            b: 181 / 255
        },
        emissive: {
            r: 21 / 255,
            g: 21 / 255,
            b: 21 / 255
        },
        clearcoat: .1
    },
    BB2: {
        diffuse: {
            r: 69 / 255,
            g: 99 / 255,
            b: 138 / 255
        },
        emissive: {
            r: 8 / 255,
            g: 13 / 255,
            b: 19 / 255
        },
        glossiness: .35,
        clearcoat: .09
    },
    MGG: {
        diffuse: {
            r: 117 / 255,
            g: 117 / 255,
            b: 117 / 255
        },
        glossiness: .35,
        reflectivity: .5,
        emissive: {
            r: 0,
            g: 0,
            b: 0
        },
        clearcoat: .01
    }
}

export default initialColors;