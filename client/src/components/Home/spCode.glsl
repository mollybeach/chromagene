export default spCode(){
float cap(vec3 p, vec3 a, vec3 b) {
    float sep = 0.03;
    float rad = 0.01;
    float d = capsule(p, a, b, rad);
    return d;
}

float mctwist(vec3 p, vec3 a, vec3 b) {
    
    p.zy = rot2(0.3)*p.zy;
    p.xz = rot2(time)*p.xz;
	p.x = abs(p.x);
    p.x -= 0.15;
    
    //*
    p.xz = rot2(mouse.x*0.0+5.0*p.y-0.0*time)*p.xz;
    p.x = abs(p.x);
    p.x -= 0.1;
    //*/
    
	p.xz = rot2(20.0*p.y+0.0*time)*p.xz;
	//p.xy = rot2(1.0*p.y)*p.xy;

	p.x = abs(p.x);
    p.x -= 0.03;
    
    
    float d = cap(p, a, b);
    return d;
}


float mctwist2(vec3 p, vec3 a, vec3 b) {
	p.xz = rot2(5.0*p.y)*p.xz;
	p.xz = abs(p.xz);
    p.x -= 0.1;
    
    float d = mctwist(p, a, b);
    return d;
}


// Define the signed distance function (SDF) of your object here
float surfaceDistance(vec3 p) {
    float d = mctwist(p, vec3(0.0, -0.4, 0.0), vec3(0.0, 0.4, 0.0));
	return d;
}


// Here you can define how your object at point p will be colored.
vec3 shade(vec3 p, vec3 normal) {
    vec3 lightDirection = vec3(0.0, 1.0, 0.0);
    float light = simpleLighting(p, normal, lightDirection);
    vec3 color = vec3(0.9, 0.0, 0.9);
	return color*light;
}
}
