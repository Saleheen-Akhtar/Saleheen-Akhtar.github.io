// THREE.JS BACKGROUND
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// PARTICLES
const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 50,
    (Math.random() - 0.5) * 50,
    (Math.random() - 0.5) * 50
  );
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0x00f7ff });
const particles = new THREE.Points(geometry, material);

scene.add(particles);

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

animate();

// GSAP Cinematic Fade In
gsap.from(".intro h1", {
  opacity: 0,
  y: 50,
  duration: 2
});
