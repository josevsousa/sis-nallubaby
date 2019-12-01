import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoInicioComponent } from './historico-inicio.component';

describe('HistoricoInicioComponent', () => {
  let component: HistoricoInicioComponent;
  let fixture: ComponentFixture<HistoricoInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
