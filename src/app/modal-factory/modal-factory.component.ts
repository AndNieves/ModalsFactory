import {
  Component, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentRef,
  ComponentFactory, OnDestroy, EventEmitter, Output
} from '@angular/core';
import {ModalSuccessComponent} from './modal-success/modal-success.component';
import {ModalBaseComponent} from './modal-base/modal-base.component';
import {ModalDemotedComponent} from './modal-demoted/modal-demoted.component';
import {AvailableModals} from './available-modals';
import {ModalResponse} from './modal-response';

@Component({
  selector: 'app-modal-component',
  entryComponents: [ModalSuccessComponent, ModalDemotedComponent],
  template: `
    <template #dynamicComponentContainer></template>
  `,
})
export class ModalFactoryComponent implements OnDestroy {
  @Output() modalResponse: EventEmitter<ModalResponse> = new EventEmitter();
  componentRef: ComponentRef<ModalBaseComponent>;


  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) modalContainer: ViewContainerRef;

  createModal(modalToCreate: AvailableModals) {
    this.modalContainer.clear();

    let factory: ComponentFactory<ModalBaseComponent> = null;
    if (modalToCreate === AvailableModals.SUCCESS) {
      factory = this.resolver.resolveComponentFactory(ModalSuccessComponent);
    }
    if (modalToCreate === AvailableModals.DEMOTED) {
      factory = this.resolver.resolveComponentFactory(ModalDemotedComponent);
    }
    this.componentRef = this.modalContainer.createComponent(factory);

    this.componentRef.instance.output.subscribe(event => this.modalResponse.emit(event));

  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  constructor(private resolver: ComponentFactoryResolver) {
  }
}
