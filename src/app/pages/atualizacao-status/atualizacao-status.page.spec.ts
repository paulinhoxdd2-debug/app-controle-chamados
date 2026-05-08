import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizacaoStatusPage } from './atualizacao-status.page';

describe('AtualizacaoStatusPage', () => {
  let component: AtualizacaoStatusPage;
  let fixture: ComponentFixture<AtualizacaoStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
