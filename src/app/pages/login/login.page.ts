import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {}

  async login() {
    if (this.usuario.trim() && this.senha.trim()) {
      const toast = await this.toastController.create({
        message: 'Bem-vindo ao sistema! 🚀',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();
      this.router.navigate(['/menu']);
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, preencha usuário e senha. ⚠️',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    }
  }
}
