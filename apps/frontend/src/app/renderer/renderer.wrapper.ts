import { Camera, Scene, WebGLRenderer } from 'three';
import { Singleton } from 'typescript-ioc';

@Singleton
export class RendererWrapper {
  private renderer: WebGLRenderer;

  init(canvas: HTMLCanvasElement) {
    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
    });
    this.resize(window.innerWidth, window.innerHeight);
  }

  render(scene: Scene, camera: Camera) {
    this.renderer.render(scene, camera);
  }

  resize(width: number, height: number) {
    this.renderer.setSize(width, height);
  }
}
