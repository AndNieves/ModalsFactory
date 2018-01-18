import {Component, ViewChild} from '@angular/core';
import { ModalSuccessComponent } from './modal-factory/modal-success/modal-success.component';
import {ModalFactoryComponent} from './modal-factory/modal-factory.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentData = null;
  @ViewChild(ModalFactoryComponent) modalFactory: ModalFactoryComponent;

  createHelloWorldComponent() {
    this.componentData = {
      component: ModalSuccessComponent,
      inputs: {
        showNum: 9
      }
    };
  }

  showModal() {
    this.modalFactory.show();
  }
}

