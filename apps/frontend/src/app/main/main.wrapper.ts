import { injectable } from 'inversify';
import { Subject } from 'rxjs';

@injectable()
export class MainWrapper {
  private readonly $onCanvasInit = new Subject<HTMLCanvasElement>();
  readonly onCanvasInit = this.$onCanvasInit.pipe();

  init(canvas: HTMLCanvasElement) {
    this.$onCanvasInit.next(canvas);
  }
}
