import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiItemComponent } from './li-item.component';

describe('LiItemComponent', () => {
  let component: LiItemComponent;
  let fixture: ComponentFixture<LiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
