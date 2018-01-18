import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html'
})
export class ModalSuccessComponent {

  @ViewChild('confirmDeactivationModal') public confirmDeactivationModal: ModalDirective;

  constructor() { }

  show() {
    this.confirmDeactivationModal.show();
  }

}
