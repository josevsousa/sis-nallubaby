import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaneioPrintComponent } from './romaneio-print.component';

describe('RomaneioPrintComponent', () => {
  let component: RomaneioPrintComponent;
  let fixture: ComponentFixture<RomaneioPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomaneioPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomaneioPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
