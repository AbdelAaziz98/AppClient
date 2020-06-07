import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultercompteComponent } from './consultercompte.component';

describe('ConsultercompteComponent', () => {
  let component: ConsultercompteComponent;
  let fixture: ComponentFixture<ConsultercompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultercompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultercompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
