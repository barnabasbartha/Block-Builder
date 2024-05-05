import { injectable } from 'inversify';
import { WebGLRenderer } from 'three';

@injectable()
export class RendererWrapper {
  private renderer?: WebGLRenderer;

  init(canvas: HTMLCanvasElement) {
    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
    });
    this.renderer.autoClear = false;
    this.renderer.setPixelRatio(1);
    this.renderer.shadowMap.enabled = false;
  }
}
