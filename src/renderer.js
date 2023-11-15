import { AmbientLight, BoxGeometry, DirectionalLight, HemisphereLight, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer } from '../node_modules/three/build/three.module.js';

let camera, geometry, material, mesh, renderer, scene;

init();

animate();

function init() {

    scene = new Scene();

    scene.add(new AmbientLight(0x7c7c7c, 3.0));

    scene.add(new DirectionalLight(0xFFFFFF, 3.0));

    scene.add(new HemisphereLight(0xFFFFFF, 1));

    camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;

    renderer = new WebGLRenderer({ antialias: true, });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    geometry = new BoxGeometry(200, 200, 200);

    material = new MeshStandardMaterial({ color: '#FFA500' })

    mesh = new Mesh(geometry, material);

    scene.add(mesh);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}
