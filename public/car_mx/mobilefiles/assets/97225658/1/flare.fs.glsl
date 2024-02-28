
#ifndef PI
    #define PI 3.14159265359
#endif

varying vec2 vUv0;
varying vec3 vNormal;
varying vec3 vPosition;

uniform sampler2D uDiffuseMap;
uniform vec3 uViewVec;
uniform vec3 uEmissive;

float curveInternal(float value, float x[3], float y[3]) {
    if(value <= x[0]) 
        return y[0];
    if(value >= x[2])
        return y[2];

    for(int i = 0; i < 3; i++){
        if(x[i] <= value && value <= x[i+1]) {
            float ratio = (value - x[i]) / (x[i+1] - x[i]);
            return y[i+1] * ratio + y[i] * (1.0 - ratio);
        }
    }
    return 1.0;
}

float curve(float value) {
    float x[3], y[3];
    x[0] = 0.0; x[1] = 0.56; x[2] = 1.0;
    y[0] = 0.0; y[1] = 0.0; y[2] = 1.0;
    return curveInternal(value, x, y);
    
}

void main(void)
{
    vec3 normal = normalize(vNormal);
    vec3 pos = normalize(vPosition);

    float r = dot(normal, -pos);
    r = curve(r);
    
    vec4 color = texture2D(uDiffuseMap, vUv0);

    gl_FragColor = vec4(vec3(color) * uEmissive * r, color.a);
}