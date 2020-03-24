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
    customElements.define('devops-path', CEElement);
  }
}
