import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDialogComponent } from './produtos-dialog.component';

describe('ProdutosDialogComponent', () => {
  let component: ProdutosDialogComponent;
  let fixture: ComponentFixture<ProdutosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
