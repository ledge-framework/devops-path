import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

@Component({
  selector: 'wc-devops-path',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devops-path';
  constructor(injector: Injector) {
    const CEElement = createCustomElement(PeriodicTableComponent, {injector});
    customElements.define('devops-path', CEElement);
  }
}
