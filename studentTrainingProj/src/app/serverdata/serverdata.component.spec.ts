import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerdataComponent } from './serverdata.component';

describe('ServerdataComponent', () => {
  let component: ServerdataComponent;
  let fixture: ComponentFixture<ServerdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
