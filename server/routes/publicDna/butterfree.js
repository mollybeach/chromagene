let head = shape( () => {
  displace(0.0, 0.0, 0.00);
  color(0.1,0.0,0.9);
  //box(0.281, 0.2919, 0.4);
  sphere(0.445398769999);
  //intersect(.4);
  displace(0.0, 0.1, -0.060);
  blend(0.002);
  //torus(.4539, 0.09);
  blend(0.002);
  displace(0.0, 0.1, -0.060);
  //torus(.4639, 0.09);
  displace(0.0, -0.55, 0.33167921070);
  torus(.04912134324639, 0.18091129);
});
let eyebrow = shape( () => {
  color(0.4,0.1,0.0)
  displace(0.121029,0.143298153,0.463397197);
  torus(0.0662, 0.64);
  color(0.0,0.0,0.0);
  //displace(0.0,0.03,0.04);
  //sphere(0.065);
});
let eye = shape( () => { 
  color(0.7,0.0,0.1);
  displace(0.213252,0.034,0.291364798473739);
  rotateZ(PI/2); 
  torus(0.076, 0.1091209);
  color(1.5,0.50,2.05);
  displace(0.042340,-0.0610,0.1018117);
  sphere(0.096451);
});
let arms = shape( () => { 
  rotateZ(PI/1);
   let p = getSpace();
  let sd = sphericalDistribution(p,175.0);
  color(0.0,1.9,1.8);
  displace(-0.253160642340, 0.5234510610,0.2519634);
  rotateZ(PI/2); 
  blend(0.1352);
  torus(0.06, 0.09);
  displace(-0.0441,-0.0,0.15);
  box(0.011-sd.w*0.01, 0.081-sd.w*0.01, 0.08-sd.w*0.1);
  blend(0.252);
  displace(0.0241,0.0,0.1035);
  sphere(0.0311-sd.w*0.01);
});

let leg1 = shape( () => { 
  let p = getSpace();
  let sd = sphericalDistribution(p,175.0);
  color(0.0,1.9,1.8);
  displace(-0.2,-1.095,0.3);
  rotateZ(PI/2); 
  blend(0.1352);
  torus(0.06, 0.09);
  displace(-0.0441,-0.0,0.15);
  box(0.011-sd.w*0.01, 0.081-sd.w*0.01, 0.08-sd.w*0.1);
  blend(0.252);
  displace(0.0241,0.0,0.1035);
  sphere(0.0311-sd.w*0.01);
});
let leg2 = shape( () => { 
  displace(0.4, 0.0, 0.0);
  let p = getSpace();
  let sd = sphericalDistribution(p,175.0);
  color(0.0,1.9,1.8);
  displace(-0.2,-1.095,0.3);
  rotateZ(PI/2);
  blend(0.13252);
  torus(0.06, 0.09);
  displace(-0.0441,-0.0,0.15);
  box(0.011-sd.w*0.01, 0.081-sd.w*0.01, 0.08-sd.w*0.1);
  blend(0.252);
  displace(0.0241,-0.0,0.1035);
  sphere(0.0311-sd.w*0.01);
});

let torso = shape(() => {
  let p = getSpace();
  let n = noise(140*p)*0.5+0.5;
   color(0.1,0.0,0.9);
  box(0.05,0.1,0.01);
  expand(0.349);
});
let shirt = shape(() => {
  let p = getSpace();
  let n = noise(140*p)*0.5+0.5;
  displace(0.0, -0.73269960, 0.243);
   color(1.2,1.0,1.05);
  box(0.04,0.09,0.009);
  expand(0.349);
});
let beak = shape( () => {
rotateZ(PI/1);
color(0.0,1.9,1.8);
displace(-0.0, 0.05, 0.4239512995);
torus(0.0735, 0.053391);
  displace(0.010, 0.0001, 0.215245239512995);
  blend(0.2);
  rotateX(PI/2);
//cylinder(0.02, 0.1213412);
expand(0.0232);
});
let cheek = shape( () => {
  color(1.0,0.4,0.0);
  displace(0.189,-0.05,0.415396);
  //sphere(0.045);
  //displace(0.0,0.0,0.04);
  //sphere(0.095);
});
let beard = shape( () => {
 displace(0.0,0.03,0.19721213498501);
 color(1.0,1.091,1.04);
 torus(0.09343, 0.231192109812);
});
let beard2 = shape( () => {
rotateZ(PI/2);
 displace(-0.09429,-0.074, .09180716959636793176);
 color(1.0,1.091,1.04);
 torus(0.09343, 0.331);
});
let outerFeather = shape( () => {
  color(0.0,0.0,0.0);
  displace(0.215,0.4,0.25965292);
  //let p = getSpace();
  //let sd = sphericalDistribution(p,5.0);
  //rotateX(PI/0.5);
  //rotateZ(PI/1.4);
  rotateY(PI/3);
  cylinder(0.0351296,0.63642);
  blend(0.02646);
  color(0.0,0.0,0.0);
 displace(0.,0.2,0.0);
  sphere(0.09114935); 
});
let innerFeather= shape( () => {
  color(0.0, 0.0, 0.0);
  displace(0.215,0.28913,0.242);
  //let p = getSpace();
  //let sd = sphericalDistribution(p,5.0);
  //rotateX(PI/0.5);
  //rotateZ(PI/1.5);
  rotateY(PI/3);
  cylinder(0.0196,0.19442);
  blend(0.26);
  color(3.0, 0.5, 1.0);
  sphere(0.015814935); 
  expand(0.01);
});
let nose = shape( () => {
  rotateZ(PI/2);
  color(1.0,1.0,1.0);
  //let s = getSpace();
  displace(-0.079201309975321, -0.0853,0.5142134856536);
  torus(0.015, 0.018);
  expand(0.026483);
});
let tooth = shape( () => {
  rotateX(PI/2);
  color(1.9,1.6,0.0)
  //let s = getSpace();
  displace(0.0,0.48975,.1042081);
  torus(0.071, 0.0215);
  //expand(0.02);
});
let button = shape( () => {
  color(1.5,0.0,0.1);
  //let s = getSpace();
  displace(0.0,-0.41,0.5495);
  torus(0.01, 0.015);
  displace(0.0,-0.049,0.042);
  torus(0.01, 0.015);
  displace(0.0, -0.0678, 0.03);
  torus(0.0091, 0.015);
  expand(0.02);
});
let tongue = shape( () => {
  color(0.6,0.03,0.02);
  //let s = getSpace();
  displace(0.0,-0.21299990,0.475693385);
  torus(0.0102, 0.018);
  //expand(0.02);
});
let wings = shape( () => {
  rotateY(0.3*sin(time*4))
  color(0.0,0.0,0.0);
  displace(0.67435,-0.5543109,0.012121);
  let p = getSpace();
  let sd = sphericalDistribution(p,75.0);
  rotateX(PI/0.5);
  rotateZ(PI/1.1);
  rotateY(PI/5);
  cylinder(0.09,0.22);
  blend(0.26);
  color(1.0,1.0,1.0);
   sphere(0.210935-sd.w*0.1);
  rotateX(PI/1.9);
  torus(0.4325-sd.w*0.043, 0.1-sd.w*0.01,); 
  displace(-0.109119310,-0.170, -0.0291);
   //rotateZ(PI/1);
  torus(0.25-sd.w*0.03, 0.1-sd.w*0.09,);
  //wing subtract
   color(1.0,1.0,1.0);
  displace(0.0,0.3510, -0.4291);
   //rotateZ(PI/1);
  torus(0.0-sd.w*0.03, 0.2-sd.w*0.09,);
  
});
let hair2 = shape( () => {
   let p = getSpace();
  let sd = sphericalDistribution(p,20.0);
  sphere(0.35-sd.w*0.1);
 color(0.0,1.0,1.1);
  displace(0.0,0.3,0.24721);
  rotateX(PI/0.5);
  rotateZ(PI/1);
  rotateY(PI/7);
  cylinder(0.0009,0.22);
  blend(0.26);
  color(1.0,0.4,0.03);
  sphere(0.25-sd.w*0.1); 
});
let bow = shape( () => {
  rotateZ(PI/3);
  color(1.0,.0,0.0);
  displace(0.50, -0.1023, -0.120);
  torus(0.1309192, 0.1);
});
let bow2 = shape( () => {
  rotateY(PI/22);
  color(1.0,.0,0.0);
  displace(0.400, 0.213, -0.20);
  torus(0.1309192, 0.1);
});
let sleeve = shape( () => {
  //color(1.0,1.0,1.0);
  //displace(0.13252,0.034,0.364798473739);
  rotateZ(PI/2);
   displace(-0.44485951,-0.2198789,0.3297893);
  color(0.2,0.5,0.05);
  torus(0.05, 0.09);
  //torus(0.03, 0.03);
  //displace(0.0,0.0,-0.09);
});
let tor = shape( () => {
displace(0.0,-0.7, 0.2);
torso();  
});
let owl = shape( () => {
head();
leg1();
leg2();
button();
tongue();
tooth();
//beard();
//shirt();
//hair2();
tor();
beak();
mirrorX();
arms();
eye();
//sleeve();
rotateZ(-PI/14);
//eyebrow();
wings();
cheek();
//beard2();
outerFeather();
innerFeather();
nose();
//mirrorY();
//displace(0.0,- 0.0, 0.0);
//bow();
//bow2();
});
displace(0.0, 0.2, 0.0);
rotateX(0.2);
rotateZ(-0.1*sin(time*2))
rotateY(-0.1*cos(time*3))
rotateX(-0.1*cos(time*4))
owl();
expand(-0.0352);
