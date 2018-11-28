Moon = function(){
	var geo = new THREE.SphereGeometry(50,320,320);
	var material = new THREE.MeshPhongMaterial( {color:"hotpink"} );
	this.sphere = new THREE.Mesh(geo, material);
	this.sphere.position.y = 100;
	this.sphere.position.x = 400;		
	this.sphere.position.z = -3000;
	// this.sphere.receiveShadow = true; 
	// this.sphere.castShadow = true;
}

var moon = [];

function createMoon(){

		moon = new Moon();
		scene.add( moon.sphere );
// for ( var i = 0; i < 10; i ++ ) {	
// 		moon[i] = new Moon();
// 		scene.add( moon[i].sphere );

// // }

// }
}