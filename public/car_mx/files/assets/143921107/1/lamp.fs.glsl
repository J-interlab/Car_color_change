

varying vec2 vUv0;
uniform float uProgress;
uniform int uMode;

uniform sampler2D uOff;
uniform sampler2D uTurn;
uniform sampler2D uOn;

void main(void)
{
    vec4 colorOff = texture2D(uOff, vUv0);
    
    if(uMode == 1) {
        gl_FragColor = colorOff * (1.0 - uProgress) + texture2D(uTurn, vUv0) * uProgress;
    } else if(uMode == 2) {
        gl_FragColor = colorOff * (1.0 - uProgress) + vec4(1.0, 0.5, 0.0, 1.0) * uProgress;
    } else if(uMode == 3) {
        gl_FragColor = texture2D(uOn, vUv0);
    } else if(uMode == 4) {
        gl_FragColor = texture2D(uTurn, vUv0);
    } else {
        gl_FragColor = colorOff;
    } 
}
