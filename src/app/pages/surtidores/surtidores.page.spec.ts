import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurtidoresPage } from './surtidores.page';

describe('SurtidoresPage', () => {
  let component: SurtidoresPage;
  let fixture: ComponentFixture<SurtidoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SurtidoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
