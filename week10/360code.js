import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

var cube, lightTwo, torus, renderer, scene, camera, controls;

const button = document.getElementById('start');
button.addEventListener("click", start);

function start()
{
	button.style.display="none";

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor(0xeeeeee,1);

	document.body.appendChild( renderer.domElement );

	controls = new OrbitControls( camera, renderer.domElement );

	var lightOne=new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(lightOne);

	lightTwo=new THREE.PointLight(0xffffff, 0.5);
	scene.add(lightTwo);
	lightTwo.position.set(-1.5, 0, -1);

	const light3 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
	scene.add( light3 );

	const loader = new THREE.TextureLoader();

	var cylgeometry = new THREE.CylinderGeometry(6, 6, 0.2, 30);
 	var cylmaterial = new THREE.MeshLambertMaterial({map: loader.load('../assets/map.png')});
 	var cylmesh = new THREE.Mesh(cylgeometry, cylmaterial);
 	cylmesh.position.set(0, 0, -6);
	cylmesh.rotation.set(85, 0, -88);
 	scene.add(cylmesh);
	
	camera.position.z = 3;
	controls.update();

	animate();
}

var phi = 0;

const timer = new THREE.Clock();

function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}



