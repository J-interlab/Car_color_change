
varying vec2 vUv0;

uniform sampler2D uPlay;
uniform sampler2D uPause;
uniform sampler2D uFill;
uniform float uProgress;

const float PI = 3.14159265359;

void main(void)
{
    vec4 ret = texture2D(uPause, vUv0);

    if(uProgress < 1e-6) {
        ret = texture2D(uPlay, vUv0);
        
    } else {
        vec2 delta = vUv0 - vec2(0.5, 0.5);
        float angle = atan(delta.y, delta.x) + PI * 0.5;
        if(angle < 0.0) {
            angle += PI * 2.0;
        }
        if(angle < PI * 2.0 * uProgress) {
            ret = texture2D(uFill, vUv0);
        }
    }
    gl_FragColor = ret; 
}