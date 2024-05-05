import { MainWrapper } from '@frontend/app/main/main.wrapper';
import { RendererWrapper } from '@frontend/app/renderer/renderer.wrapper';
import { injectable } from 'inversify';

@injectable()
export class RendererService {
  constructor(
    private readonly main: MainWrapper,
    private readonly wrapper: RendererWrapper,
  ) {
    main.onCanvasInit.subscribe(wrapper.init);
  }
}
