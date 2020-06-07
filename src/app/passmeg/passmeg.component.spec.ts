import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassmegComponent } from './passmeg.component';

describe('PassmegComponent', () => {
  let component: PassmegComponent;
  let fixture: ComponentFixture<PassmegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassmegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassmegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
