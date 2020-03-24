import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {PathComponent} from './path/path.component';

@Component({
  selector: 'wc-devops-path',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devops-path';
  constructor(injector: Injector) {
    const CEElement = createCustomElement(PathComponent, {injector});
    // tslint:disable-next-line:no-unused-expression
    customElements.get('devops-path') || customElements.define('devops-path', CEElement);
  }
}
