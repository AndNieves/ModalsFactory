import {Component, ViewChild, Output, EventEmitter, AfterViewInit} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import {ModalResponse} from '../modal-response';
import {ModalBaseComponent} from '../modal-base/modal-base.component';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html'
})
export class ModalSuccessComponent extends ModalBaseComponent implements AfterViewInit {

  @ViewChild('confirmDeactivationModal') public confirmDeactivationModal: ModalDirective;

  ngAfterViewInit() {
    this.confirmDeactivationModal.show();
  }

}
