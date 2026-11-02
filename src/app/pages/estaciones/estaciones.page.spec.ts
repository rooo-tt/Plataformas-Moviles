import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstacionesPage } from './estaciones.page';

describe('EstacionesPage', () => {
  let component: EstacionesPage;
  let fixture: ComponentFixture<EstacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
