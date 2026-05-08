import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cadastro-chamado',
    loadChildren: () => import('./pages/cadastro-chamado/cadastro-chamado.module').then( m => m.CadastroChamadoPageModule)
  },
  {
    path: 'lista-chamados',
    loadChildren: () => import('./pages/lista-chamados/lista-chamados.module').then( m => m.ListaChamadosPageModule)
  },
  {
    path: 'detalhes-chamado',
    loadChildren: () => import('./pages/detalhes-chamado/detalhes-chamado.module').then( m => m.DetalhesChamadoPageModule)
  },
  {
    path: 'atualizacao-status',
    loadChildren: () => import('./pages/atualizacao-status/atualizacao-status.module').then( m => m.AtualizacaoStatusPageModule)
  },
  {
    path: 'cadastro-tecnico',
    loadChildren: () => import('./pages/cadastro-tecnico/cadastro-tecnico.module').then( m => m.CadastroTecnicoPageModule)
  },
  {
    path: 'lista-tecnicos',
    loadChildren: () => import('./pages/lista-tecnicos/lista-tecnicos.module').then( m => m.ListaTecnicosPageModule)
  },
  {
    path: 'resumo',
    loadChildren: () => import('./pages/resumo/resumo.module').then( m => m.ResumoPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
