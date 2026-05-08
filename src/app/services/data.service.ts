import { Injectable } from '@angular/core';

export interface Tecnico {
  id: number;
  nome: string;
  especialidade: string;
  contato: string;
  situacao: string;
}

export interface Chamado {
  id: number;
  solicitante: string;
  setor: string;
  titulo: string;
  descricao: string;
  prioridade: string;
  dataAbertura: string;
  tecnico: string;
  status: string;
  observacao: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  chamados: Chamado[] = [];
  tecnicos: Tecnico[] = [];

  constructor() {
    // Initial dummy data for testing
    this.tecnicos = [
      { id: 1, nome: 'Carlos Técnico', especialidade: 'Hardware', contato: 'carlos@email.com', situacao: 'Ativo' },
      { id: 2, nome: 'Ana Suporte', especialidade: 'Software', contato: 'ana@email.com', situacao: 'Ativo' }
    ];
    this.chamados = [
      {
        id: 1,
        solicitante: 'João Silva',
        setor: 'Financeiro',
        titulo: 'Computador não liga',
        descricao: 'O computador do setor financeiro não está ligando.',
        prioridade: 'Alta',
        dataAbertura: '2026-04-30',
        tecnico: 'Carlos Técnico',
        status: 'Aberto',
        observacao: ''
      }
    ];
  }

  // Technicians
  listarTecnicos() {
    return this.tecnicos;
  }

  adicionarTecnico(tecnico: Tecnico) {
    tecnico.id = this.tecnicos.length > 0 ? Math.max(...this.tecnicos.map(t => t.id)) + 1 : 1;
    this.tecnicos.push(tecnico);
  }

  excluirTecnico(id: number) {
    this.tecnicos = this.tecnicos.filter(t => t.id !== id);
  }

  // Calls
  adicionarChamado(chamado: Chamado) {
    chamado.id = this.chamados.length > 0 ? Math.max(...this.chamados.map(c => c.id)) + 1 : 1;
    this.chamados.push(chamado);
  }

  listarChamados() {
    return this.chamados;
  }

  obterChamado(id: number) {
    return this.chamados.find(c => c.id === id);
  }

  excluirChamado(id: number) {
    this.chamados = this.chamados.filter(c => c.id !== id);
  }

  atualizarStatus(id: number, status: string, observacao: string) {
    const chamado = this.chamados.find(c => c.id === id);
    if (chamado) {
      chamado.status = status;
      chamado.observacao = observacao;
    }
  }
}
