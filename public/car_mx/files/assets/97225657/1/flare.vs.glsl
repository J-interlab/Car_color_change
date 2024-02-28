attribute vec3 aPosition;
attribute vec2 aUv0;
attribute vec3 aNormal;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;
uniform mat4 matrix_view;

varying vec2 vUv0;
varying vec3 vNormal;
varying vec3 vPosition;


void main(void)
{
    vUv0 = aUv0;
        
    mat4 modelView = matrix_view * matrix_model;
    vec4 pos = modelView * vec4(aPosition, 1.0);
    vPosition = vec3(pos) / pos.w;

    vec4 normal = modelView * vec4(aNormal, 0.0);
    vNormal = vec3(normal);

    gl_Position = matrix_viewProjection * matrix_model * vec4(aPosition, 1.0);
}