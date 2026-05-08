import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService, Tecnico } from '../../services/data.service';

@Component({
  selector: 'app-cadastro-tecnico',
  templateUrl: './cadastro-tecnico.page.html',
  styleUrls: ['./cadastro-tecnico.page.scss'],
  standalone: false,
})
export class CadastroTecnicoPage implements OnInit {
  tecnico: Partial<Tecnico> = {
    nome: '',
    especialidade: '',
    contato: '',
    situacao: 'Ativo'
  };

  constructor(
    private dataService: DataService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  async salvar() {
    if (this.tecnico.nome && this.tecnico.especialidade && this.tecnico.contato) {
      this.dataService.adicionarTecnico(this.tecnico as Tecnico);
      const toast = await this.toastController.create({
        message: 'Técnico cadastrado com sucesso! 👨‍🔧',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.router.navigate(['/lista-tecnicos']);
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
