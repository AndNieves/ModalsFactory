import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ModalFactoryComponent } from './modal-factory/modal-factory.component';
import { ModalSuccessComponent } from './modal-factory/modal-success/modal-success.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalFactoryComponent,
    ModalSuccessComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
