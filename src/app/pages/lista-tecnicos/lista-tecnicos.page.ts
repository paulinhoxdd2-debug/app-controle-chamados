import { Component, OnInit } from '@angular/core';
import { DataService, Tecnico } from '../../services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-tecnicos',
  templateUrl: './lista-tecnicos.page.html',
  styleUrls: ['./lista-tecnicos.page.scss'],
  standalone: false,
})
export class ListaTecnicosPage implements OnInit {
  tecnicos: Tecnico[] = [];

  constructor(
    private dataService: DataService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.carregarTecnicos();
  }

  ionViewWillEnter() {
    this.carregarTecnicos();
  }

  carregarTecnicos() {
    this.tecnicos = this.dataService.listarTecnicos();
  }

  async excluir(tecnico: Tecnico) {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: `Deseja realmente excluir o técnico ${tecnico.nome}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Excluir',
          handler: () => {
            this.dataService.excluirTecnico(tecnico.id);
            this.carregarTecnicos();
          }
        }
      ]
    });
    await alert.present();
  }
}
