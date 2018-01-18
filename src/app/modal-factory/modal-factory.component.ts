import {Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver} from '@angular/core';
import {ModalSuccessComponent} from './modal-success/modal-success.component';
import {current} from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-modal-component',
  entryComponents: [ModalSuccessComponent],
  template: `
    <div #dynamicComponentContainer></div>
  `,
})
export class ModalFactoryComponent {
  currentComponent = null;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) modalContainer: ViewContainerRef;

  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }
    this.modalContainer.clear();

    // Inputs need to be in the following format to be resolved properly
    const inputProviders = Object.keys(data.inputs).map((inputName) => ({provide: inputName, useValue: data.inputs[inputName]}));
    const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);

    // We create a factory out of the component we want to create
    const factory = this.resolver.resolveComponentFactory(data.component);

    // We create the component using the factory and the injector
    const component = factory.create(injector);

    // We insert the component into the dom container
    this.modalContainer.insert(component.hostView);

    this.currentComponent = component;
  }

  show() {
    this.currentComponent.show();
  }

  constructor(private resolver: ComponentFactoryResolver) {

  }
}
