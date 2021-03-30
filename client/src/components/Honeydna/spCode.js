/* eslint-disable */

export function spCode()  {
    rotateX(Math.PI / 2);
    let dScale = 0.1;
    let yScale = 0.3;
    let tScale = 0.05;
    let iter = 1;
    displace(0, -0.1,0)
    displace(sin(time * 3)*tScale,iter * dScale + 0.08,cos(time * 3)*tScale);
    color(max(ceil(sin(time)), 0), max(ceil(sin(time + Math.PI)), 0),0);
    sphere(0.08);
    displace(sin(time * 3)*tScale,iter * dScale + 0.08,cos(time * 3)*tScale);
    torus(0.4 * yScale, 0.06);
    iter = 2;
    displace(0- 2 * (sin(time*2)*tScale),iter * dScale,0 - 2 * (cos(time*2)*tScale));
    torus(0.4 * iter * yScale, 0.06);
    iter = 3;
    displace(3 * sin(time*4)*tScale,iter * dScale,3 * cos(time*4)*tScale);
    torus(0.4 * iter * yScale, 0.06);
    };