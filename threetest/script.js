var scene = new THREE.Scene();
// 35 = ajuster le champs de vue, grosseur de la fênetre, 3000 = trop proche ou trop loin le rendu s'arrête
var camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000);
camera.position.set(0, 0, 100);

var rendu = new THREE.WebGLRenderer();
// grosseur du rendu
rendu.setSize(window.innerWidth, window.innerHeight);
rendu.setClearColor(0x132644);
// mettre le rendu dans le document html
document.body.appendChild(rendu.domElement);

//Rendre la scene + camera
rendu.render(scene, camera);

// ----------------------Création élément 3D------------

// Création d'un groupe pour regrouper les élement 3D = Matériels

var forme = new THREE.Group();

// 4 paramètres : rayon, grosseur du tube, nbr de segments, nbr de segments au long du tube

var geometries = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// création matériel par défaut en arc-en-ciel

var materiel = new THREE.MeshNormalMaterial({
wireframe: true,
wireframeLineWidth: 5,
wireframeLinejoin : 'round',
wireframeLinecap : 'round'
});

// On ajoute le matériel dans la forme
forme.add(new THREE.Mesh(geometries, materiel));

// On ajoute la forme dans la scene
scene.add(forme);

// Pour controler la caméra 
var controls = new OrbitControls(camera, rendu.domElement );
controls.update();

// ANIMATION 

var animer = function() {
    requestAnimationFrame(animer);
    forme.rotation.x += 0.005;
    forme.rotation.y += 0.008;
    rendu.render(scene, camera);
};
animer();

