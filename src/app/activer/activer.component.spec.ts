import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiverComponent } from './activer.component';

describe('ActiverComponent', () => {
  let component: ActiverComponent;
  let fixture: ComponentFixture<ActiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
