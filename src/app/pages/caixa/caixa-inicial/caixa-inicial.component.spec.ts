import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaInicialComponent } from './caixa-inicial.component';

describe('CaixaInicialComponent', () => {
  let component: CaixaInicialComponent;
  let fixture: ComponentFixture<CaixaInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
