import { Camera, PerspectiveCamera, Vector3 } from 'three';
import { Singleton } from 'typescript-ioc';

@Singleton
export class CameraWrapper {
  private camera: Camera;

  init() {
    this.camera = new PerspectiveCamera(70, 1, 0.001, 1000);
    this.camera.position.set(2, 1.5, 2);
    this.camera.lookAt(new Vector3());
  }

  getCamera() {
    return this.camera;
  }
}
