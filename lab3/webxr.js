//import * as THREE from 'three';
import * as THREE from '../three/three.module.js';
import { ARButton } from 'three/addons/webxr/ARButton.js'; //2


document.addEventListener("DOMContentLoaded", async () => {

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera();

	const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	document.body.appendChild(renderer.domElement);

	var lightOne=new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(lightOne);

	const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
	scene.add(light);

	

		
	var boxgeometry=new THREE.BoxGeometry(0.8, 0.1, 0.8);
	var boxmaterial=new THREE.MeshBasicMaterial({color: 0x000000});
	var boxmesh=new THREE.Mesh(boxgeometry, boxmaterial);
	boxmesh.position.set(-1, -0.5, 0);
	boxmesh.scale.set(0.2, 0.2, 0.2);
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


let animations = [
	[ //0
		torus7mesh, // obj (mesh)
		[0.65, 0.86, +0.01], // y: ystart, yend, ystep
		[-1, 1, +0.01], // x: xstart, xend, xstep
		[0.80, -0.37, -0.01] //y: ystart, yend, ystep
	],
	[ //1
		torus6mesh, // obj (mesh)
		[0.65, 0.86, +0.01], // y: ystart, yend, ystep
		[-1, 0, +0.01], // x: xstart, xend, xstep
		[0.80, -0.37, -0.01] //y: ystart, yend, ystep
	],
	[ //2
		torus5mesh, // obj (mesh)
		[0.65, 0.86, +0.01], // y: ystart, yend, ystep
		[-1, 1, +0.01], // x: xstart, xend, xstep
		[0.80, -0.2, -0.01] //y: ystart, yend, ystep
	],
	[ //3
		torus4mesh, // obj (mesh)
		[0.65, 0.86, +0.01], // y: ystart, yend, ystep
		[-1, 0, +0.01], // x: xstart, xend, xstep
		[0.80, -0.2, -0.01] //y: ystart, yend, ystep
	],
	[ //4
		torus3mesh, // obj (mesh)
		[0.65, 0.86, +0.01], // y: ystart, yend, ystep
		[-1, 1, +0.01], // x: xstart, xend, xstep
		[0.80, -0.03, -0.01] //y: ystart, yend, ystep
	],
	[ //5
		torus2mesh, // obj (mesh)
		[0.65, 0.86, +0.01], // y: ystart, yend, ystep
		[-1, 0, +0.01], // x: xstart, xend, xstep
		[0.80, -0.03, -0.01] //y: ystart, yend, ystep
	],
	[ //6
		torusmesh, // obj (mesh)
		[0.65, 0.86, +0.01], // y: ystart, yend, ystep
		[-1, 1, +0.01], // x: xstart, xend, xstep
		[0.80, 0.14, -0.01] //y: ystart, yend, ystep
	],
];

let step = 1;
let object = 0;

//Створення функції animate
function animate() {
	if(object < animations.length)
	{
		const mesh = animations[object][0];
		const move = animations[object][step];
		const start = animations[object][step][0];
		const end = animations[object][step][1];
		const delta = animations[object][step][2];

		if(step === 1)
		{
			mesh.position.y += delta;
			if(Math.abs(mesh.position.y-end) < Math.abs(delta)/2)
				step = 2;
		}
		else if(step === 2)
		{
			mesh.position.x += delta;
			if(Math.abs(mesh.position.x-end) < Math.abs(delta)/2)
				step = 3;
		}
		else //if(step === 3)
		{
			mesh.position.y += delta;
			if(Math.abs(mesh.position.y-end) < Math.abs(delta)/2)
			{
				step = 1;	
				object++;
			}
		}
	}
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

//Виклик функції animate
animate();









	/*}, function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded') ;
	}, function ( error ) {
		console.error( error );
	} );*/

	renderer.xr.enabled = true;

	renderer.setAnimationLoop(() => {
		renderer.render(scene, camera);
	});

	const arButton = ARButton.createButton(renderer, {
		optionalFeatures: ["dom-overlay"],
		domOverlay: {root: document.body}
	});
	document.body.appendChild(arButton);
});
