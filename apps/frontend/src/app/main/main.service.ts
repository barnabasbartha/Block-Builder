import { MainWrapper } from '@frontend/app/main/main.wrapper';
import { RendererService } from '@frontend/app/renderer/renderer.service';
import { injectable } from 'inversify';

@injectable()
export class MainService {
  constructor(
    private readonly wrapper: MainWrapper,
    private readonly renderer: RendererService,
  ) {}

  init(canvas: HTMLCanvasElement) {
    this.wrapper.init(canvas);
  }
}
