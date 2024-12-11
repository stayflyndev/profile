import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { motion } from "framer-motion";

const TechSkills3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create the computer screen and body (basic shapes)
    const screenGeometry = new THREE.PlaneGeometry(1.6, 0.9);
    const screenMaterial = new THREE.MeshBasicMaterial({ color: 'blue' });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = -2;
    scene.add(screen);

    const bodyGeometry = new THREE.BoxGeometry(2, 1, 0.2);
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: 'blue' });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.z = -1;
    scene.add(body);

    // Load font and add 3D text
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const textGeometry = new TextGeometry("Tech Skills", {
          font: font,
          size: 0.1,
          height: 0.01,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 'blue' });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-0.5, 0, -2.1);
        scene.add(textMesh);
      }
    );

    // Lighting
    const light = new THREE.AmbientLight('blue', 2);
    scene.add(light);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      body.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ width: "800vw", height: "100vh" }} />
    </div>
  );
};

export default TechSkills3D;
