import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaneioDialogComponent } from './romaneio-dialog.component';

describe('RomaneioDialogComponent', () => {
  let component: RomaneioDialogComponent;
  let fixture: ComponentFixture<RomaneioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomaneioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomaneioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
