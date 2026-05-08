import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Chamado } from '../../services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-atualizacao-status',
  templateUrl: './atualizacao-status.page.html',
  styleUrls: ['./atualizacao-status.page.scss'],
  standalone: false,
})
export class AtualizacaoStatusPage implements OnInit {
  chamado: Chamado | undefined;
  novoStatus: string = '';
  novaObservacao: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.chamado = this.dataService.obterChamado(Number(params['id']));
        if (this.chamado) {
          this.novoStatus = this.chamado.status;
          this.novaObservacao = this.chamado.observacao;
        }
      }
    });
  }

  async salvar() {
    if (this.chamado) {
      this.dataService.atualizarStatus(this.chamado.id, this.novoStatus, this.novaObservacao);
      const toast = await this.toastController.create({
        message: 'Status atualizado com sucesso! ✅',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.router.navigate(['/lista-chamados']);
    }
  }
}
