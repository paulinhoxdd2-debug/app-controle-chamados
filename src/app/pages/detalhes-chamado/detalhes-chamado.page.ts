import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Chamado } from '../../services/data.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-chamado',
  templateUrl: './detalhes-chamado.page.html',
  styleUrls: ['./detalhes-chamado.page.scss'],
  standalone: false,
})
export class DetalhesChamadoPage implements OnInit {
  chamado: Chamado | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.chamado = this.dataService.obterChamado(Number(params['id']));
      }
    });
  }

  ionViewWillEnter() {
    if (this.chamado) {
      this.chamado = this.dataService.obterChamado(this.chamado.id);
    }
  }

  async excluir() {
    const alert = await this.alertController.create({
      header: 'Excluir Chamado',
      message: 'Tem certeza que deseja excluir este chamado?',
      buttons: [
        { text: 'Não', role: 'cancel' },
        {
          text: 'Sim',
          handler: () => {
            if (this.chamado) {
              this.dataService.excluirChamado(this.chamado.id);
              this.navCtrl.back();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  atualizarStatus() {
    if (this.chamado) {
      this.navCtrl.navigateForward(['/atualizacao-status'], {
        queryParams: { id: this.chamado.id }
      });
    }
  }
}
