import { CameraService } from '@frontend/app/camera/camera.service';
import { MainWrapper } from '@frontend/app/main/main.wrapper';
import { RendererService } from '@frontend/app/renderer/renderer.service';
import { SceneService } from '@frontend/app/scene/scene.service';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export class MainService {
  constructor(
    @Inject private readonly wrapper: MainWrapper,
    @Inject private readonly camera: CameraService,
    @Inject private readonly renderer: RendererService,
    @Inject private readonly scene: SceneService,
  ) {}

  init(canvas: HTMLCanvasElement) {
    this.wrapper.init(canvas);
  }
}
