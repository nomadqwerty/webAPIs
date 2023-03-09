// get canvs
let canvas = document.querySelector("canvas");

// get canvas context: version of webgl to use
let gl = canvas.getContext("webgl2");

let vShadeSrc = `#version 300 es

#pragma vscode_glsllint_stage: vert


void main()
{
    gl_Position = vec4(0.0, 0.0, 0.0, 0.1);
    gl_PointSize = 150.0;
}`;

let fShadeSrc = `#version 300 es

#pragma vscode_glsllint_stage: vert

precision mediump float;

out vec4 fragColor;

void main()
{
    fragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;

// create program:
let program = gl.createProgram();

// create shader.
let vShade = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vShade, vShadeSrc);
gl.compileShader(vShade);
gl.attachShader(program, vShade);

// create shader.
let fShade = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fShade, fShadeSrc);
gl.compileShader(fShade);
gl.attachShader(program, fShade);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  console.log(gl.getShaderInfoLog(vShade));
  console.log(gl.getShaderInfoLog(fShade));
}

gl.useProgram(program);

gl.drawArrays(gl.POINTS, 0, 1);
