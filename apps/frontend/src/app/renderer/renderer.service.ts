import { CameraWrapper } from '@frontend/app/camera/camera.wrapper';
import { MainWrapper } from '@frontend/app/main/main.wrapper';
import { RendererWrapper } from '@frontend/app/renderer/renderer.wrapper';
import { SceneWrapper } from '@frontend/app/scene/scene.wrapper';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export class RendererService {
  constructor(
    @Inject private readonly wrapper: RendererWrapper,
    @Inject private readonly main: MainWrapper,
    @Inject private readonly scene: SceneWrapper,
    @Inject private readonly camera: CameraWrapper,
  ) {
    main.onCanvasInit.subscribe((canvas) => wrapper.init(canvas));
    main.onCanvasInit.subscribe(() => {
      setTimeout(() => {
        wrapper.render(scene.getScene(), camera.getCamera());
      }, 100);
    });
  }
}
