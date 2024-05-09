import { Subject } from 'rxjs';
import { Singleton } from 'typescript-ioc';

@Singleton
export class MainWrapper {
  private readonly $onCanvasInit = new Subject<HTMLCanvasElement>();
  readonly onCanvasInit = this.$onCanvasInit.pipe();

  init(canvas: HTMLCanvasElement) {
    this.$onCanvasInit.next(canvas);
  }
}
