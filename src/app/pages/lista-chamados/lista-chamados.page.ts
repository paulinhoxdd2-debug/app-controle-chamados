import { Component, OnInit } from '@angular/core';
import { DataService, Chamado } from '../../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-chamados',
  templateUrl: './lista-chamados.page.html',
  styleUrls: ['./lista-chamados.page.scss'],
  standalone: false,
})
export class ListaChamadosPage implements OnInit {
  chamados: Chamado[] = [];

  constructor(
    private dataService: DataService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.carregarChamados();
  }

  ionViewWillEnter() {
    this.carregarChamados();
  }

  carregarChamados() {
    this.chamados = this.dataService.listarChamados();
  }

  verDetalhes(id: number) {
    this.navCtrl.navigateForward(['/detalhes-chamado'], {
      queryParams: { id: id }
    });
  }

  getPriorityClass(prio: string) {
    return 'priority-' + prio.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  getStatusClass(status: string) {
    const s = status.toLowerCase().replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return 'status-' + s;
  }
}
