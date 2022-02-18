import * as THREE from 'three';

import { createCameraGui, sizes } from '../utils';

export const setupCamera = (scene) => {
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.01, 125);

    camera.position.set(1.9, 0, 4.1);
    scene.add(camera);
    // camera.position.set(0, -3, 0);  //*** Bottom View
    // camera.position.set(0, 9, 0); //*** Top View
    return camera;
};
