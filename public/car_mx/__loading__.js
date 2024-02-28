function onSpotButtonClicked(e) {
    window.parent.postMessage(JSON.stringify({
        message: "spotClicked",
        payload: e
    }), "*")
}

function onSceneLoaded() {
    window.parent.postMessage(JSON.stringify({
        message: "sceneLoaded"
    }), "*")
}

function onMouseOverSpot(e) {
    document.body.style.cursor = e ? "pointer" : "default"
}

function onGoInteriorClicked() {
    window.parent.postMessage(JSON.stringify({
        message: "goInteriorClicked"
    }), "*")
}

function onGoExteriorClicked() {
    window.parent.postMessage(JSON.stringify({
        message: "goExteriorClicked"
    }), "*")
}

function onTaggingEvent(e, n) {
    a = ["doorOpenButtonClicked", "doorCloseButtonClicked", "wheelMoveButtonClicked", "sideMirrorMoveButtonClicked", "lightMenuOpenClicked", "lightMenuCloseClicked", "zoomChanged"].indexOf(e), a >= 0 && window.parent.postMessage(JSON.stringify({
        message: e
    }), "*"), a = ["taillightTurned", "turnSignalTurned", "lowBeamTurned", "highBeamTurned"].indexOf(e), a >= 0 && window.parent.postMessage(JSON.stringify({
        message: e,
        payload: n
    }), "*")
}

function onScreenshotTaken(u) {
    window.parent.postMessage(JSON.stringify({
        message: "screenshotTaken",
        payload: u
    }), "*")
}
var canvas, devices, app, CANVAS_ID = "application-canvas",
    createCanvas = function () {
        return canvas = document.createElement("canvas"), canvas.setAttribute("id", CANVAS_ID), canvas.setAttribute("tabindex", 0), canvas.onselectstart = function () {
            return !1
        }, document.body.appendChild(canvas), canvas
    },
    createInputDevices = function (e) {
        var s = {
            elementInput: new pc.ElementInput(e, {
                useMouse: INPUT_SETTINGS.useMouse,
                useTouch: INPUT_SETTINGS.useTouch
            }),
            keyboard: INPUT_SETTINGS.useKeyboard ? new pc.Keyboard(window) : null,
            mouse: INPUT_SETTINGS.useMouse ? new pc.Mouse(e) : null,
            gamepads: INPUT_SETTINGS.useGamepads ? new pc.GamePads() : null,
            touch: INPUT_SETTINGS.useTouch && pc.platform.touch ? new pc.TouchDevice(e) : null
        };
        return s
    },
    configureCss = function (e, s, a) {
        canvas.classList && canvas.classList.add("fill-mode-" + e);
        var i = "@media screen and (min-aspect-ratio: " + s + "/" + a + ") {";
        i += "    #application-canvas.fill-mode-KEEP_ASPECT {", i += "        width: auto;", i += "        height: 100%;", i += "        margin: 0 auto;", i += "    }", i += "}", document.head.querySelector && (document.head.querySelector("style").innerHTML += i)
    },
    reflow = function () {
        app.resizeCanvas(canvas.width, canvas.height), canvas.style.width = "", canvas.style.height = "";
        var e = app._fillMode;
        e != pc.FILLMODE_NONE && e != pc.FILLMODE_KEEP_ASPECT || (e == pc.FILLMODE_NONE && canvas.clientHeight < window.innerHeight || canvas.clientWidth / canvas.clientHeight >= window.innerWidth / window.innerHeight ? canvas.style.marginTop = Math.floor((window.innerHeight - canvas.clientHeight) / 2) + "px" : canvas.style.marginTop = "")
    },
    displayError = function (e) {
        var s = document.createElement("div");
        s.innerHTML = ['<table style="background-color: #8CE; width: 100%; height: 100%;">', "  <tr>", '      <td align="center">', '          <div style="display: table-cell; vertical-align: middle;">', '              <div style="">' + e + "</div>", "          </div>", "      </td>", "  </tr>", "</table>"].join("\n"), document.body.appendChild(s)
    };
canvas = createCanvas(), devices = createInputDevices(canvas),
    function () {
        try {
            app = new pc.Application(canvas, {
                elementInput: devices.elementInput,
                keyboard: devices.keyboard,
                mouse: devices.mouse,
                gamepads: devices.gamepads,
                touch: devices.touch,
                graphicsDeviceOptions: window.CONTEXT_OPTIONS,
                assetPrefix: window.ASSET_PREFIX || "",
                scriptPrefix: window.SCRIPT_PREFIX || "",
                scriptsOrder: window.SCRIPTS || []
            })
        } catch (e) {
            return void(e instanceof pc.UnsupportedBrowserError ? displayError('This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to find out more.</a>') : e instanceof pc.ContextCreationError ? displayError('It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>') : displayError("Could not initialize application. Error: " + e))
        }
    }();
var configure = function () {
        app.configure(CONFIG_FILENAME, function (e) {
            e && console.error(e), configureCss(app._fillMode, app._width, app._height), setTimeout(function () {
                reflow(), window.addEventListener("resize", reflow, !1), window.addEventListener("orientationchange", reflow, !1), app.preload(function (e) {
                    e && console.error(e), app.loadScene(SCENE_PATH, function (e, s) {
                        e && console.error(e), app.start(), window.parent.postMessage(JSON.stringify({
                            message: "engineLoaded"
                        }), "*")
                    })
                })
            })
        })
    },
    loadEngine2 = function () {
        PRELOAD_MODULES.length > 0 ? loadModules(PRELOAD_MODULES, ASSET_PREFIX, configure) : configure()
    };
pc.script.createLoadingScreen(function (e) {
    var s = function () {
            var e = document.createElement("div");
            e.id = "application-splash-wrapper", document.body.appendChild(e)
        },
        a = function () {
            var e = document.getElementById("application-splash-wrapper");
            e.parentElement.removeChild(e)
        },
        i = function (e) {
            e = Math.min(1, Math.max(0, e)), window.localStorage.setItem("engineLoadProgress", e)
        },
        r = function () {
            var e = ["body {", "    background-color: #283538;", "}", "#application-splash-wrapper {", "    position: absolute;", "    top: 0;", "    left: 0;", "    height: 100%;", "    width: 100%;", "    background-color: #283538;", "}", "#application-splash {", "    position: absolute;", "    top: calc(50% - 28px);", "    width: 264px;", "    left: calc(50% - 132px);", "}", "#application-splash img {", "    width: 100%;", "}", "#progress-bar-container {", "    margin: 20px auto 0 auto;", "    height: 2px;", "    width: 100%;", "    background-color: #1d292c;", "}", "#progress-bar {", "    width: 0%;", "    height: 100%;", "    background-color: #f60;", "}", "@media (max-width: 480px) {", "    #application-splash {", "        width: 170px;", "        left: calc(50% - 85px);", "    }", "}"].join("\n"),
                s = document.createElement("style");
            s.type = "text/css", s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e)), document.head.appendChild(s)
        };
    r(), s(), e.on("preload:end", function () {
        e.off("preload:progress")
    }), e.on("preload:progress", i), e.on("start", a)
});
var colors = {
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
        "4SS": {
            diffuse: {
                r: 195 / 255,
                g: 195 / 255,
                b: 195 / 255
            },
            emissive: {
                r: 195 / 255 * .3,
                g: 195 / 255 * .3,
                b: 195 / 255 * .3
            },
            glossiness: .5,
            clearcoat: .15
        },
        KDG: {
            diffuse: {
                r: 57 / 255,
                g: 54 / 255,
                b: 54 / 255
            },
            emissive: {
                r: 29 / 255,
                g: 29 / 255,
                b: 29 / 255
            },
            reflectivity: .5,
            clearcoat: .12
        },
        R4R: {
            diffuse: {
                r: 163 / 255,
                g: 20 / 255,
                b: 20 / 255
            },
            emissive: {
                r: 44 / 255,
                g: 20 / 255,
                b: 20 / 255
            },
            clearcoat: .1
        },
        ABP: {
            diffuse: {
                r: 22 / 255,
                g: 22 / 255,
                b: 22 / 255
            },
            emissive: {
                r: 22 / 255,
                g: 22 / 255,
                b: 22 / 255
            },
            clearcoat: .1,
            reflectivity: 1
        },
        DRG: {
            diffuse: {
                r: 189 / 255,
                g: 88 / 255,
                b: 47 / 255
            },
            emissive: {
                r: 70 / 255,
                g: 29 / 255,
                b: 8 / 255
            },
            clearcoat: .1
        },
        KLG: {
            diffuse: {
                r: 156 / 255,
                g: 156 / 255,
                b: 156 / 255
            },
            emissive: {
                r: 156 / 255 * .2,
                g: 156 / 255 * .2,
                b: 156 / 255 * .2
            },
            glossiness: .35,
            clearcoat: .1
        },
        SPB: {
            diffuse: {
                r: 43 / 255,
                g: 121 / 255,
                b: 181 / 255
            },
            emissive: {
                r: 20 / 255,
                g: 32 / 255,
                b: 41 / 255
            },
            clearcoat: .1
        },
        GWP: {
            diffuse: {
                r: 244 / 255,
                g: 242 / 255,
                b: 240 / 255
            },
            emissive: {
                r: 50 / 255,
                g: 49 / 255,
                b: 48 / 255
            },
            clearcoat: .22
        },
        A6R: {
            diffuse: {
                r: 129 / 255,
                g: 28 / 255,
                b: 28 / 255
            },
            emissive: {
                r: 32 / 255,
                g: 13 / 255,
                b: 13 / 255
            },
            clearcoat: .08
        },
        UD: {
            diffuse: {
                r: 247 / 255,
                g: 252 / 255,
                b: 1
            },
            emissive: {
                r: 247 / 255 * .3,
                g: 252 / 255 * .3,
                b: .3
            },
            glossiness: .7,
            clearcoat: .22
        },
        UD2: {
            diffuse: {
                r: 247 / 255,
                g: 252 / 255,
                b: 1
            },
            emissive: {
                r: 247 / 255 * .3,
                g: 252 / 255 * .3,
                b: .3
            },
            glossiness: .5,
            clearcoat: .22
        },
        BNB: {
            diffuse: {
                r: 1 / 255,
                g: 61 / 255,
                b: 129 / 255
            },
            emissive: {
                r: 0,
                g: 24 / 255,
                b: 44 / 255
            },
            clearcoat: .08
        },
        A3R: {
            diffuse: {
                r: 167 / 255,
                g: 47 / 255,
                b: 47 / 255
            },
            emissive: {
                r: 27 / 255,
                g: 4 / 255,
                b: 4 / 255
            },
            clearcoat: .08
        },
        EU3: {
            diffuse: {
                r: 83 / 255,
                g: 91 / 255,
                b: 99 / 255
            },
            emissive: {
                r: 9 / 255,
                g: 12 / 255,
                b: 17 / 255
            },
            clearcoat: .1
        },
        B2R: {
            diffuse: {
                r: 36 / 255,
                g: 59 / 255,
                b: 161 / 255
            },
            emissive: {
                r: 0,
                g: 6 / 255,
                b: 36 / 255
            },
            clearcoat: .08
        },
        SPB2: {
            diffuse: {
                r: 39 / 255,
                g: 110 / 255,
                b: 156 / 255
            },
            emissive: {
                r: 9 / 255,
                g: 14 / 255,
                b: 17 / 255
            },
            glossiness: .35,
            clearcoat: .08
        },
        EB: {
            diffuse: {
                r: 46 / 255,
                g: 46 / 255,
                b: 46 / 255
            },
            emissive: {
                r: 12 / 255,
                g: 12 / 255,
                b: 12 / 255
            },
            clearcoat: .1
        },
        ADR: {
            diffuse: {
                r: 150 / 255,
                g: 7 / 255,
                b: 7 / 255
            },
            emissive: {
                r: 24 / 255,
                g: 0,
                b: 0
            },
            glossiness: .4,
            clearcoat: .1
        },
        KCS: {
            diffuse: {
                r: 144 / 255,
                g: 150 / 255,
                b: 150 / 255
            },
            emissive: {
                r: 39 / 255,
                g: 39 / 255,
                b: 39 / 255
            }
        },
        DU2: {
            diffuse: {
                r: 42 / 255,
                g: 57 / 255,
                b: 121 / 255
            },
            emissive: {
                r: 2 / 255,
                g: 13 / 255,
                b: 32 / 255
            },
            clearcoat: .1
        },
        KDG4: {
            diffuse: {
                r: 85 / 255,
                g: 85 / 255,
                b: 85 / 255
            },
            emissive: {
                r: 29 / 255,
                g: 29 / 255,
                b: 29 / 255
            },
            glossiness: .5,
            reflectivity: .5,
            clearcoat: .12
        },
        H4R: {
            diffuse: {
                r: 152 / 255,
                g: 15 / 255,
                b: 17 / 255
            },
            emissive: {
                r: 56 / 255,
                g: 17 / 255,
                b: 18 / 255
            },
            clearcoat: .12
        },
        P2M: {
            diffuse: {
                r: 87 / 255,
                g: 87 / 255,
                b: 87 / 255
            },
            emissive: {
                r: 7 / 255,
                g: 7 / 255,
                b: 7 / 255
            },
            clearcoat: .11
        },
        D9B: {
            diffuse: {
                r: 49 / 255,
                g: 49 / 255,
                b: 78 / 255
            },
            emissive: {
                r: 10 / 255,
                g: 10 / 255,
                b: 22 / 255
            },
            clearcoat: .1
        },
        N20: {
            diffuse: {
                r: 252 / 255,
                g: 96 / 255,
                b: 26 / 255
            },
            emissive: {
                r: 46 / 255,
                g: 30 / 255,
                b: 7 / 255
            },
            clearcoat: .1
        },
        "9P": {
            diffuse: {
                r: 58 / 255,
                g: 57 / 255,
                b: 53 / 255
            },
            emissive: {
                r: 0,
                g: 0,
                b: 0
            },
            clearcoat: .08
        },
        BU2: {
            diffuse: {
                r: 37 / 255,
                g: 52 / 255,
                b: 71 / 255
            },
            emissive: {
                r: 5 / 255,
                g: 14 / 255,
                b: 24 / 255
            },
            glossiness: .25,
            clearcoat: .08
        },
        AJR: {
            diffuse: {
                r: 172 / 255,
                g: 33 / 255,
                b: 35 / 255
            },
            emissive: {
                r: 53 / 255,
                g: 4 / 255,
                b: 6 / 255
            },
            clearcoat: .13
        },
        B3A: {
            diffuse: {
                r: 55 / 255,
                g: 54 / 255,
                b: 126 / 255
            },
            emissive: {
                r: 6 / 255,
                g: 6 / 255,
                b: 21 / 255
            },
            glossiness: .25,
            clearcoat: .08
        },
        ABT: {
            diffuse: {
                r: 95 / 255,
                g: 97 / 255,
                b: 99 / 255
            },
            emissive: {
                r: 0,
                g: 0,
                b: 0
            },
            clearcoat: .12
        },
        CR5: {
            diffuse: {
                r: 216 / 255,
                g: 69 / 255,
                b: 70 / 255
            },
            emissive: {
                r: 19 / 255,
                g: 4 / 255,
                b: 3 / 255
            },
            clearcoat: .08
        },
        M4B: {
            diffuse: {
                r: 59 / 255,
                g: 107 / 255,
                b: 150 / 255
            },
            emissive: {
                r: 0,
                g: 0,
                b: 0
            },
            clearcoat: .08
        },
        C3U: {
            diffuse: {
                r: 11 / 255,
                g: 116 / 255,
                b: 155 / 255
            },
            emissive: {
                r: 0,
                g: 16 / 255,
                b: 23 / 255
            },
            glossiness: .25,
            clearcoat: .08
        },
        BBL: {
            diffuse: {
                r: .6,
                g: 172 / 255,
                b: 207 / 255
            },
            emissive: {
                r: 13 / 255,
                g: 19 / 255,
                b: 30 / 255
            },
            glossiness: .25,
            clearcoat: .1
        },
        AGT: {
            diffuse: {
                r: 117 / 255,
                g: 117 / 255,
                b: 114 / 255
            },
            emissive: {
                r: 15 / 255,
                g: 16 / 255,
                b: 17 / 255
            },
            glossiness: .25,
            clearcoat: .08
        },
        COLOR4_07: {
            diffuse: {
                r: 33 / 255,
                g: 42 / 255,
                b: 19 / 255
            },
            emissive: {
                r: 13 / 255,
                g: 15 / 255,
                b: 8 / 255
            },
            metalness: .57,
            glossiness: .42,
            reflectivity: 1,
            clearcoat: .08
        },
        GWP2: {
            diffuse: {
                r: 1,
                g: 253 / 255,
                b: 251 / 255
            },
            emissive: {
                r: 65 / 255,
                g: 64 / 255,
                b: 63 / 255
            },
            clearcoat: .22
        },
        ERG: {
            diffuse: {
                r: 182 / 255,
                g: 192 / 255,
                b: 211 / 255
            },
            emissive: {
                r: 35 / 255,
                g: 38 / 255,
                b: 41 / 255
            },
            glossiness: .35,
            clearcoat: .12
        },
        C7S: {
            diffuse: {
                r: 168 / 255,
                g: 168 / 255,
                b: 168 / 255
            },
            emissive: {
                r: 17 / 255,
                g: 17 / 255,
                b: 17 / 255
            },
            glossiness: .35,
            clearcoat: .1
        },
        DU3: {
            diffuse: {
                r: 30 / 255,
                g: .2,
                b: 155 / 255
            },
            emissive: {
                r: 2 / 255,
                g: 13 / 255,
                b: 32 / 255
            },
            clearcoat: .1
        },
        DWR: {
            diffuse: {
                r: 189 / 255,
                g: 18 / 255,
                b: 24 / 255
            },
            emissive: {
                r: 19 / 255,
                g: 2 / 255,
                b: 2 / 255
            },
            clearcoat: .1
        },
        CGE: {
            diffuse: {
                r: 68 / 255,
                g: 87 / 255,
                b: 80 / 255
            },
            emissive: {
                r: 6 / 255,
                g: 9 / 255,
                b: 7 / 255
            },
            metalness: .98,
            glossiness: .35,
            reflectivity: .5,
            clearcoat: .08
        },
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
            clearcoat: .06
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
            clearcoat: .07
        },
        FSB: {
            diffuse: {
                r: 44 / 255,
                g: 44 / 255,
                b: 42 / 255
            },
            emissive: {
                r: 10 / 255,
                g: 10 / 255,
                b: 10 / 255
            },
            clearcoat: .09,
            reflectivity: 1
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
            clearcoat: .09
        },
        KDG10: {
            diffuse: {
                r: 105 / 255,
                g: 111 / 255,
                b: 117 / 255
            },
            glossiness: .35,
            reflectivity: .5,
            emissive: {
                r: 0,
                g: 0,
                b: 0
            },
            clearcoat: .09
        },
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
        H3R: {
            diffuse: {
                r: 175 / 255,
                g: 41 / 255,
                b: 41 / 255
            },
            emissive: {
                r: 17 / 255,
                g: 4 / 255,
                b: 4 / 255
            },
            clearcoat: .1
        },
        EWE: {
            diffuse: {
                r: 89 / 255,
                g: 102 / 255,
                b: 80 / 255
            },
            emissive: {
                r: 10 / 255,
                g: 11 / 255,
                b: 9 / 255
            },
            clearcoat: .1
        },
        PLU: {
            diffuse: {
                r: 89 / 255,
                g: 126 / 255,
                b: 129 / 255
            },
            emissive: {
                r: 9 / 255,
                g: 13 / 255,
                b: 13 / 255
            },
            clearcoat: .08
        },
        KLM: {
            diffuse: {
                r: 150 / 255,
                g: 150 / 255,
                b: 150 / 255
            },
            glossiness: .2,
            emissive: {
                r: 0,
                g: 0,
                b: 0
            },
            clearcoat: .001
        },
        UD14: {
            diffuse: {
                r: 247 / 255,
                g: 252 / 255,
                b: 1
            },
            emissive: {
                r: 247 / 255 * .3,
                g: 252 / 255 * .3,
                b: .3
            },
            glossiness: .35,
            clearcoat: .22
        },
        KLG14: {
            diffuse: {
                r: 126 / 255,
                g: 126 / 255,
                b: 126 / 255
            },
            emissive: {
                r: 126 / 255 * .2,
                g: 126 / 255 * .2,
                b: 126 / 255 * .2
            },
            glossiness: .35,
            clearcoat: .1
        },
        R4R14: {
            diffuse: {
                r: 141 / 255,
                g: 10 / 255,
                b: 10 / 255
            },
            emissive: {
                r: 44 / 255,
                g: 20 / 255,
                b: 20 / 255
            },
            clearcoat: .1
        },
        B2R14: {
            diffuse: {
                r: 19 / 255,
                g: .2,
                b: 124 / 255
            },
            emissive: {
                r: 0,
                g: 6 / 255,
                b: 36 / 255
            },
            clearcoat: .08
        },
        WVB: {
            diffuse: {
                r: 1 / 255,
                g: 100 / 255,
                b: 165 / 255
            },
            emissive: {
                r: 9 / 255,
                g: 14 / 255,
                b: 17 / 255
            },
            glossiness: .35,
            clearcoat: .08
        },
        CR515: {
            diffuse: {
                r: 161 / 255,
                g: 30 / 255,
                b: 35 / 255
            },
            emissive: {
                r: 19 / 255,
                g: 4 / 255,
                b: 3 / 255
            },
            clearcoat: .08
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
    },
    colorCodes = [
        ["SWP", "4SS", "KDG", "R4R", "ABP", "DRG", "KLG", "SPB"],
        [],
        [],
        ["SPB", "KLG", "SWP"],
        ["EB", "GWP", "ADR", "KCS", "DU2", "KDG4", "COLOR4_07"],
        ["H4R", "P2M", "SWP", "D9B", "N20", "COLOR5_06"],
        ["9P", "A3R", "KLG", "BU2", "SWP", "KCS"],
        [],
        ["SWP", "ABP", "ABT", "CR5", "KLG", "4SS", "M4B"],
        [],
        ["SWP", "KLG10", "KDG10", "FSB", "BB2", "DWR"],
        ["CGE+ABP", "ABP+KLG", "AGT+KLG", "KLG11+AGT", "M4B11+ABP", "SWP+KLG"],
        ["AJR+9P", "B3A+9P", "SWP+AJR", "SWP+9P"],
        ["ABP", "H3R", "SWP", "KCS", "KDG", "EWE", "PLU", "SWP+ABP", "H3R+ABP", "KDG+ABP", "KDG+UD", "KCS+ABP"],
        ["UD14", "SWP", "4SS", "ABP", "KLG14", "R4R14", "B2R14", "WVB"],
        ["KLM", "SWP", "CR515", "DU3", "ABP"],
        ["SWP", "KLG10", "BB2", "MGG"],
        ["SWP", "ABP", "KLG14", "R4R14", "B2R14", "WVB"]
    ];
window.carIndex = 0, window.addEventListener("message", function (e) {
    var s = JSON.parse(e.data);
    if ("color" === s.message) {
        var a = colorCodes[window.carIndex][s.payload];
        if (a.indexOf("+") >= 0) {
            var i = a.split("+");
            i.length >= 2 && app.fire("changeColor", colors[i[0]], colors[i[1]])
        } else {
            var r = colors[a];
            app.fire("changeColor", r)
        }
    } else if(s.message === 'colorByValue') {
        app.fire('changeColor', s.payload);
    } else s.message.startsWith("exterior") ? (window.carIndex = parseInt(s.message.substr(8)), app.fire("changeScene", s.message)) : s.message.startsWith("interior") ? app.fire("changeScene", s.message) : "loadEngine" === s.message ? (app.on("spotButtonClicked", onSpotButtonClicked), app.on("goInteriorClicked", onGoInteriorClicked), app.on("goExteriorClicked", onGoExteriorClicked), app.on("taggingEvent", onTaggingEvent), app.on("screenshotTaken", onScreenshotTaken), app.on("sceneLoaded", onSceneLoaded), app.on("mouseOverSpot", onMouseOverSpot), loadEngine2()) : "setDay" === s.message ? app.fire("setDay", s.payload) : "spotSelected" === s.message ? app.fire("spotButtonSelected", s.payload) : "cameraRotate" === s.message ? app.fire("cameraRotate", s.payload) : "cameraRotate360" === s.message ? app.fire("cameraRotate360") : "cameraWheel" === s.message ? app.fire("cameraSet", [0, 0, 7]) : "cameraReset" === s.message ? app.fire("cameraSet", [-48, -10, 7]) : "cameraResetMobile" === s.message ? app.fire("cameraSet", [-50, -18.4, 8.3]) : "showAllSpots" === s.message ? app.fire("showOrHideAllSpots", !0) : "hideAllSpots" === s.message ? app.fire("showOrHideAllSpots", 0) : "showUISpots" === s.message ? app.fire("showOrHideUISpots", !0) : "hideUISpots" === s.message ? app.fire("showOrHideUISpots", 0) : "takeScreenshot" === s.message ? app.fire("takeScreenshot") : "cameraRotateToSpot" === s.message ? app.fire("cameraRotateToSpot", s.payload.toString()) : "gyroscope" === s.message && app.fire("gyroscope", s.payload)
}), window.parent.postMessage(JSON.stringify({
    message: "scriptLoaded"
}), "*");