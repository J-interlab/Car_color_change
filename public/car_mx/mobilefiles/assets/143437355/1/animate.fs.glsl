
varying vec2 vUv0;
uniform float uProgress;
uniform float uOpacity;

const float PI = 3.14159265359;
const float LOW_WIDTH = 0.02;
const float HIGH_WIDTH = 0.06;
const float CENTER_WIDTH = 0.06;

float getOpacity(float ratio) {
    float value = 0.3;
    if(ratio < value) {
        return ratio / value;
    } else if(ratio > 1.0 - value) {
        return (1.0 - ratio) / value;
    } 
    return 1.0;
}


void main(void)
{
    float len = length(vUv0 - vec2(0.5, 0.5)) * 2.0;

    if(len < CENTER_WIDTH) {
        float alpha = 1.0;
        if(len >= CENTER_WIDTH * 0.8) {
            alpha = (CENTER_WIDTH - len) / (CENTER_WIDTH * 0.2);
        }
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * uOpacity);
    } else {
        float width = LOW_WIDTH * (1.0 - len) + HIGH_WIDTH * len;
        bool flag = false;
        for(int i = 0; i < 3; i++) {
            float center = (float(i) + uProgress) / 3.0;
            if(abs(len - center) <= width) {
                float ratio = (len - center) / width + 0.5;
                float alpha = getOpacity(ratio);
                if(i == 2) {
                    alpha *= 1.0 - uProgress;
                }
                gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * uOpacity); 
                flag = true;
            }
        }
        if(!flag) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); 
        }
    }

}
