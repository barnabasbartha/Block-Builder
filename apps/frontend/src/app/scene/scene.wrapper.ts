import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  Scene,
  SpotLight,
} from 'three';
import { Singleton } from 'typescript-ioc';

@Singleton
export class SceneWrapper {
  private scene: Scene;

  init() {
    this.scene = new Scene();

    const box = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial({ color: 'red' }),
    );
    this.scene.add(box);

    const ground = new Mesh(
      new PlaneGeometry(3, 3, 1, 1),
      new MeshStandardMaterial({ color: 'blue' }),
    );
    ground.rotation.set(-Math.PI / 2, 0, 0);
    ground.position.set(0, -0.5, 0);
    this.scene.add(ground);

    const ambientLight = new AmbientLight(0xdddddd, 1);
    this.scene.add(ambientLight);

    const spotLight = new SpotLight(0xffffff, 1);
    spotLight.position.set(2, 2, 2);
    spotLight.target.position.set(0, 0, 0);
    this.scene.add(spotLight);
  }

  getScene() {
    return this.scene;
  }
}
