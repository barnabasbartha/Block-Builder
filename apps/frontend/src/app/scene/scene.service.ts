import { MainWrapper } from '@frontend/app/main/main.wrapper';
import { SceneWrapper } from '@frontend/app/scene/scene.wrapper';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export class SceneService {
  constructor(
    @Inject private readonly wrapper: SceneWrapper,
    @Inject private readonly main: MainWrapper,
  ) {
    main.onCanvasInit.subscribe(() => wrapper.init());
  }
}
