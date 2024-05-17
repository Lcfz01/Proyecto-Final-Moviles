import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaQrPage } from './lista-qr.page';

describe('ListaQrPage', () => {
  let component: ListaQrPage;
  let fixture: ComponentFixture<ListaQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
