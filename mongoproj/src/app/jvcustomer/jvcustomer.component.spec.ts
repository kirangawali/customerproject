import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvcustomerComponent } from './jvcustomer.component';

describe('JvcustomerComponent', () => {
  let component: JvcustomerComponent;
  let fixture: ComponentFixture<JvcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
