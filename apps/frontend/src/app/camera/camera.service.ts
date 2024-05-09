import { CameraWrapper } from '@frontend/app/camera/camera.wrapper';
import { MainWrapper } from '@frontend/app/main/main.wrapper';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export class CameraService {
  constructor(
    @Inject private readonly wrapper: CameraWrapper,
    @Inject private readonly main: MainWrapper,
  ) {
    main.onCanvasInit.subscribe(() => wrapper.init());
  }
}
