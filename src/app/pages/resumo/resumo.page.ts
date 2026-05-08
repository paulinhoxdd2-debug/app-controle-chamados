import { Component, OnInit } from '@angular/core';
import { DataService, Chamado } from '../../services/data.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
  standalone: false,
})
export class ResumoPage implements OnInit {
  totalChamados: number = 0;
  porStatus: any = {};
  porPrioridade: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.calcularResumo();
  }

  ionViewWillEnter() {
    this.calcularResumo();
  }

  calcularResumo() {
    const chamados = this.dataService.listarChamados();
    this.totalChamados = chamados.length;

    // Reset
    this.porStatus = { 'Aberto': 0, 'Em atendimento': 0, 'Concluído': 0, 'Cancelado': 0 };
    this.porPrioridade = { 'Baixa': 0, 'Média': 0, 'Alta': 0, 'Urgente': 0 };

    chamados.forEach(c => {
      if (this.porStatus[c.status] !== undefined) this.porStatus[c.status]++;
      if (this.porPrioridade[c.prioridade] !== undefined) this.porPrioridade[c.prioridade]++;
    });
  }
}
