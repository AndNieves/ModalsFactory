import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemotedComponent } from './modal-demoted.component';

describe('ModalDemotedComponent', () => {
  let component: ModalDemotedComponent;
  let fixture: ComponentFixture<ModalDemotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemotedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
