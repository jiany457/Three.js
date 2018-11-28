// construct 8 blend shapes
Morph = function(){
				var newG = new THREE.BoxGeometry( 100, 100, 100 );
				var newM = new THREE.MeshLambertMaterial( { color: 0xffffff, morphTargets: true } );
				
				for ( var i = 0; i < 8; i ++ ) {
					var vertices = [];
					for ( var v = 0; v < newG.vertices.length; v ++ ) {
						vertices.push( newG.vertices[ v ].clone() );
						if ( v === i ) {
							vertices[ vertices.length - 1 ].x *= 2;
							vertices[ vertices.length - 1 ].y *= 2;
							vertices[ vertices.length - 1 ].z *= 2;
						}
					}
					newG.morphTargets.push( { name: "target" + i, vertices: vertices } );
				}
				
				newG = new THREE.BufferGeometry().fromGeometry( newG );
				
				this.mesh = new THREE.Mesh( newG, newM );
				this.mesh.position.set(-1000,200,-2000);
				// scene.add( this.mesh );
				
}

				
var morp;
function createMorph(){
		morp = new Morph();
		scene.add( morp.mesh );
var newparams = {
					influence1: 0,
					influence2: 0,
					influence3: 0,
					influence4: 0,
					influence5: 0,
					influence6: 0,
					influence7: 0,
					influence8: 0
				};
				
				
				var gui = new dat.GUI();
				var folder = gui.addFolder( 'Morph Targets');
				
				folder.add( newparams, 'influence1', 0, 1 ).step( 0.01 ).onChange( function ( value ) {
					morp.mesh.morphTargetInfluences[ 0 ] = value;
				} );
				folder.add( newparams, 'influence2', 0, 1 ).step( 0.01 ).onChange( function ( value ) {
					morp.mesh.morphTargetInfluences[ 1 ] = value;
				} );
				folder.add( newparams, 'influence3', 0, 1 ).step( 0.01 ).onChange( function ( value ) {
					morp.mesh.morphTargetInfluences[ 2 ] = value;
				} );
				folder.add( newparams, 'influence4', 0, 1 ).step( 0.01 ).onChange( function ( value ) {
					morp.mesh.morphTargetInfluences[ 3 ] = value;
				} );
				folder.add( newparams, 'influence5', 0, 1 ).step( 0.01 ).onChange( function ( value ) {
					morp.mesh.morphTargetInfluences[ 4 ] = value;
				} );
				folder.add( newparams, 'influence6', 0, 1 ).step( 0.01 ).onChange( function ( value ) {
					morp.mesh.morphTargetInfluences[ 5 ] = value;
				} );
				folder.add( newparams, 'influence7', 0, 1 ).step( 0.01 ).onChange( function ( value ) {
					morp.mesh.morphTargetInfluences[ 6 ] = value;
				} );
				folder.add( newparams, 'influence8', 0, 1 ).step( 0.01 ).onChange( function ( value ) {
					morp.mesh.morphTargetInfluences[ 7 ] = value;
				} );
				folder.open();
}