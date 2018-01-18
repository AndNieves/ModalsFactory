import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ModalFactoryComponent } from './modal-factory/modal-factory.component';
import { ModalSuccessComponent } from './modal-factory/modal-success/modal-success.component';
import { ModalDemotedComponent } from './modal-factory/modal-demoted/modal-demoted.component';
import { ModalBaseComponent } from './modal-factory/modal-base/modal-base.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalFactoryComponent,
    ModalSuccessComponent,
    ModalDemotedComponent,
    ModalBaseComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
