import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFactoryComponent } from './modal-factory.component';

describe('ModalFactoryComponent', () => {
  let component: ModalFactoryComponent;
  let fixture: ComponentFixture<ModalFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
