import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalResponse} from '../modal-response';
import {ModalDirective} from 'ngx-bootstrap';
import {ModalBaseComponent} from '../modal-base/modal-base.component';

@Component({
  selector: 'app-modal-demoted',
  templateUrl: './modal-demoted.component.html'
})
export class ModalDemotedComponent extends ModalBaseComponent implements AfterViewInit  {

  @ViewChild('demotedModal') public demotedModal: ModalDirective;

  ngAfterViewInit() {
    this.demotedModal.show();
  }



}
