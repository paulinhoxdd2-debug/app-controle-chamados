import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService, Chamado, Tecnico } from '../../services/data.service';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.page.html',
  styleUrls: ['./cadastro-chamado.page.scss'],
  standalone: false,
})
export class CadastroChamadoPage implements OnInit {
  chamado: Partial<Chamado> = {
    solicitante: '',
    setor: '',
    titulo: '',
    descricao: '',
    prioridade: '',
    dataAbertura: new Date().toISOString().split('T')[0],
    tecnico: '',
    status: 'Aberto',
    observacao: ''
  };

  tecnicos: Tecnico[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.tecnicos = this.dataService.listarTecnicos();
  }

  async salvar() {
    if (
      this.chamado.solicitante && 
      this.chamado.titulo && 
      this.chamado.descricao && 
      this.chamado.prioridade && 
      this.chamado.tecnico
    ) {
      this.dataService.adicionarChamado(this.chamado as Chamado);
      const toast = await this.toastController.create({
        message: 'Chamado registrado com sucesso! 🎫',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.router.navigate(['/lista-chamados']);
    } else {
      const toast = await this.toastController.create({
        message: 'Preencha todos os campos obrigatórios! ⚠️',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
    }
  }
}
