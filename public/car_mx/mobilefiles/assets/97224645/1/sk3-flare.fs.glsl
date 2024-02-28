
#ifndef PI
    #define PI 3.14159265359
#endif

varying vec2 vUv0;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vPosition2;
varying vec2 vP1;
varying vec2 vP2;
varying vec2 vP3;
varying vec2 vP4;
varying vec2 vP5;
varying vec2 vP6;
varying vec2 vP7;
varying vec2 vP8;
varying vec2 vP9;
varying vec2 vP10;
varying vec2 vP11;

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

float sign(vec2 p, vec2 a, vec2 b) {
    vec2 da = b - a;
    vec2 db = p - a;
    return da.x * db.y - da.y * db.x;
}

bool inside() {
    float sign1 = sign(vPosition2, vP1, vP2);
    float sign2 = sign(vPosition2, vP2, vP3);
    float sign3 = sign(vPosition2, vP3, vP4);
    float sign4 = sign(vPosition2, vP4, vP5);
    float sign5 = sign(vPosition2, vP5, vP6);
    float sign6 = sign(vPosition2, vP6, vP7);
    float sign7 = sign(vPosition2, vP7, vP8);
    float sign8 = sign(vPosition2, vP8, vP9);
    float sign9 = sign(vPosition2, vP9, vP10);
    float sign10 = sign(vPosition2, vP10, vP11);
    float sign11 = sign(vPosition2, vP11, vP1);
    return (sign1 > 0.0 && sign2 > 0.0 && sign3 > 0.0 && sign4 > 0.0 && sign5 > 0.0 
        && sign6 > 0.0 && sign7 > 0.0 && sign8 > 0.0 && sign9 > 0.0 && sign10 > 0.0 && sign11 > 0.0) || 
        (sign1 < 0.0 && sign2 < 0.0 && sign3 < 0.0 && sign4 < 0.0 && sign5 < 0.0 
        && sign6 < 0.0 && sign7 < 0.0 && sign8 < 0.0 && sign9 < 0.0 && sign10 < 0.0 && sign11 < 0.0);
}

void main(void)
{
    vec3 normal = normalize(vNormal);
    vec3 pos = normalize(vPosition);

    float r = dot(normal, -pos);
    r = curve(r);
    
    vec4 color = texture2D(uDiffuseMap, vUv0);

    if(inside()) {
        r = 0.0;
    }    
    gl_FragColor = vec4(vec3(color) * uEmissive * r, color.a);
}