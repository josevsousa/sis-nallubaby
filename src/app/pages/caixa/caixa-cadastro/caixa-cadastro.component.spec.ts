import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaCadastroComponent } from './caixa-cadastro.component';

describe('CaixaCadastroComponent', () => {
  let component: CaixaCadastroComponent;
  let fixture: ComponentFixture<CaixaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
