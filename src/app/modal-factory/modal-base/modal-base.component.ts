import {Component, EventEmitter, Output} from '@angular/core';
import {ModalResponse} from '../modal-response';

@Component({
  selector: 'app-modal-base',
  template: ''
})
export class ModalBaseComponent {

  @Output() output = new EventEmitter<ModalResponse>();

  constructor() { }

  accept() {
    this.output.next(ModalResponse.OK);
  }

  cancel() {
    this.output.next(ModalResponse.CLOSED);
  }

}
