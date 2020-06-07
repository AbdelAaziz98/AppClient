import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendreComponent } from './suspendre.component';

describe('SuspendreComponent', () => {
  let component: SuspendreComponent;
  let fixture: ComponentFixture<SuspendreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspendreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
