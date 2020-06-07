import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddopComponent } from './addop.component';

describe('AddopComponent', () => {
  let component: AddopComponent;
  let fixture: ComponentFixture<AddopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
