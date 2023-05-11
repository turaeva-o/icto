import * as THREE from '../three/three.module.js';

// Our Javascript will go here.

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 3000 );

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xCBEFFF,1);
renderer.setPixelRatio(window.devicePixelRatio);

//var lightOne=new THREE.AmbientLight(0xffffff, 0.5); 
//scene.add(lightOne);

//var lightTwo=new THREE.PointLight(0xffffff, 0.5);
//scene.add(lightTwo);
//lightTwo.position.set(-1.5, 0, -1);

//const light3 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
//scene.add( light3 );

camera.position.z = 3;

var lightOne=new THREE.AmbientLight(0xffff, 0.5); 
scene.add(lightOne);

var lightTwo=new THREE.PointLight(0xffff, 0.5);
scene.add(lightTwo);


document.body.appendChild( renderer.domElement );

var boxgeometry=new THREE.BoxGeometry(0.8, 0.1, 0.8);
var boxmaterial=new THREE.MeshBasicMaterial({color: 0x000000});
var boxmesh=new THREE.Mesh(boxgeometry, boxmaterial);
boxmesh.position.set(-1, -0.5, 0);
scene.add(boxmesh);

var box2geometry=new THREE.BoxGeometry(0.8, 0.1, 0.8);
var box2material=new THREE.MeshBasicMaterial({color: 0x000000});
var box2mesh=new THREE.Mesh(box2geometry, box2material);
box2mesh.position.set(0, -0.5, 0);
scene.add(box2mesh);

var box3geometry=new THREE.BoxGeometry(0.8, 0.1, 0.8);
var box3material=new THREE.MeshBasicMaterial({color: 0x000000});
var box3mesh=new THREE.Mesh(box3geometry, box3material);
box3mesh.position.set(1, -0.5, 0);
scene.add(box3mesh);

var cylindergeometry = new THREE.CylinderGeometry( 0.05, 0.05, 1.3, 32 ); 
var cylindermaterial = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
var cylindermesh=new THREE.Mesh(cylindergeometry, cylindermaterial);
cylindermesh.position.set(-1, 0.1, 0);
scene.add(cylindermesh);

var cylinder2geometry = new THREE.CylinderGeometry( 0.05, 0.05, 1.3, 32 ); 
var cylinder2material = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
var cylinder2mesh=new THREE.Mesh(cylinder2geometry, cylinder2material);
cylinder2mesh.position.set(0, 0.1, 0);
scene.add(cylinder2mesh);

var cylinder3geometry = new THREE.CylinderGeometry( 0.05, 0.05, 1.3, 32 ); 
var cylinder3material = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
var cylinder3mesh=new THREE.Mesh(cylinder3geometry, cylinder3material);
cylinder3mesh.position.set(1, 0.1, 0);
scene.add(cylinder3mesh);

var torusgeometry = new THREE.TorusGeometry( 0.24, 0.17, 30, 100 ); 
var torusmaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } ); 
var torusmesh=new THREE.Mesh(torusgeometry, torusmaterial);
torusmesh.position.set(-1, -0.37, 0);
torusmesh.rotation.set(Math.PI/2, 0, 0);
torusmesh.scale.set(1, 1, 0.5);
scene.add(torusmesh);

var torus2geometry = new THREE.TorusGeometry( 0.24, 0.17, 30, 100 ); 
var torus2material = new THREE.MeshBasicMaterial( { color: 0xff8c00 } ); 
var torus2mesh=new THREE.Mesh(torus2geometry, torus2material);
torus2mesh.position.set(-1, -0.2, 0);
torus2mesh.rotation.set(Math.PI/2, 0, 0);
torus2mesh.scale.set(0.9, 0.9, 0.5);
scene.add(torus2mesh);

var torus3geometry = new THREE.TorusGeometry( 0.24, 0.17, 30, 100 ); 
var torus3material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
var torus3mesh=new THREE.Mesh(torus3geometry, torus3material);
torus3mesh.position.set(-1, -0.03, 0);
torus3mesh.rotation.set(Math.PI/2, 0, 0);
torus3mesh.scale.set(0.8, 0.8, 0.5);
scene.add(torus3mesh);

var torus4geometry = new THREE.TorusGeometry( 0.24, 0.17, 30, 100 ); 
var torus4material = new THREE.MeshBasicMaterial( { color: 0x008000 } ); 
var torus4mesh=new THREE.Mesh(torus4geometry, torus4material);
torus4mesh.position.set(-1, 0.14, 0);
torus4mesh.rotation.set(Math.PI/2, 0, 0);
torus4mesh.scale.set(0.7, 0.7, 0.5);
scene.add(torus4mesh);

var torus5geometry = new THREE.TorusGeometry( 0.24, 0.17, 30, 100 ); 
var torus5material = new THREE.MeshBasicMaterial( { color: 0x00bfff } ); 
var torus5mesh=new THREE.Mesh(torus5geometry, torus5material);
torus5mesh.position.set(-1, 0.31, 0);
torus5mesh.rotation.set(Math.PI/2, 0, 0);
torus5mesh.scale.set(0.6, 0.6, 0.5);
scene.add(torus5mesh);

var torus6geometry = new THREE.TorusGeometry( 0.24, 0.17, 30, 100 ); 
var torus6material = new THREE.MeshBasicMaterial( { color: 0x0000ff } ); 
var torus6mesh=new THREE.Mesh(torus6geometry, torus6material);
torus6mesh.position.set(-1, 0.48, 0);
torus6mesh.rotation.set(Math.PI/2, 0, 0);
torus6mesh.scale.set(0.5, 0.5, 0.5);
scene.add(torus6mesh);

var torus7geometry = new THREE.TorusGeometry( 0.24, 0.17, 30, 100 ); 
var torus7material = new THREE.MeshBasicMaterial( { color: 0x800080 } ); 
var torus7mesh=new THREE.Mesh(torus7geometry, torus7material);
torus7mesh.position.set(-1, 0.65, 0);
torus7mesh.rotation.set(Math.PI/2, 0, 0);
torus7mesh.scale.set(0.4, 0.4, 0.5);
scene.add(torus7mesh);

//Створення функції animate
function animate() {
	//torus7mesh.position.y.loop+=0.1;
	//torus7mesh.position.x+=0.5;
        //THREE.ZeroCurvatureEnding;
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

//Виклик функції animate
animate();