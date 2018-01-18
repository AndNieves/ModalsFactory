import {Component, ViewChild} from '@angular/core';
import {ModalFactoryComponent} from './modal-factory/modal-factory.component';
import {AvailableModals} from './modal-factory/available-modals';
import {ModalResponse} from './modal-factory/modal-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild(ModalFactoryComponent) modalFactory: ModalFactoryComponent;

  showModalSuccess() {
    this.modalFactory.createModal(AvailableModals.SUCCESS);
  }
  showModalDemoted() {
    this.modalFactory.createModal(AvailableModals.DEMOTED);
  }

  handleResponse(response: ModalResponse) {
    console.log(response);
  }
}

