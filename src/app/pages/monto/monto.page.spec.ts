import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MontoPage } from './monto.page';

describe('MontoPage', () => {
  let component: MontoPage;
  let fixture: ComponentFixture<MontoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
