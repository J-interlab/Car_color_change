attribute vec3 aPosition;
attribute vec2 aUv0;
attribute vec3 aNormal;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;
uniform mat4 matrix_view;

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

vec2 transform(vec3 pos) {
    vec4 temp = matrix_viewProjection * matrix_model * vec4(pos, 1.0);
    return vec2(temp) / temp.w;
}

void main(void)
{
    vUv0 = aUv0;
        
    mat4 modelView = matrix_view * matrix_model;
    vec4 pos = modelView * vec4(aPosition, 1.0);
    vPosition = vec3(pos) / pos.w;

    vec4 normal = modelView * vec4(aNormal, 0.0);
    vNormal = vec3(normal);

    vPosition2 = transform(aPosition);

    float x = -0.01;
    vP1 = transform(vec3(-0.354452 + x, -0.7871, 0.91003));
    vP2 = transform(vec3(-0.454244 + x, -0.763479, 0.902714));
    vP3 = transform(vec3(-0.521943 + x, -0.738915, 0.897926));
    vP4 = transform(vec3(-0.577262 + x, -0.707859, 0.894286));
    vP5 = transform(vec3(-0.623987 + x, -0.667459, 0.89149));
    vP6 = transform(vec3(-0.665472 + x, -0.614572, 0.889528));
    vP7 = transform(vec3(-0.701135 + x, -0.549393, 0.888373));
    vP8 = transform(vec3(-0.732991 + x, -0.467207, 0.887659));
    vP9 = transform(vec3(-0.766663 + x, -0.338627, 0.887065));
    vP10 = transform(vec3(0.354452 + x, -0.338627, 0.89149));
    vP11 = transform(vec3(0.354452 + x, -0.7871, 0.89149));

    gl_Position = matrix_viewProjection * matrix_model * vec4(aPosition, 1.0);
}