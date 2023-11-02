import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  descricao: string = '';
  concluida: boolean = true;

  tarefas: any = [
    { descricao: 'terminar o projeto', concluida: true },
    { descricao: 'comecar a ler o livro novo', concluida: true },
    { descricao: 'lavar o carro', concluida: false },
    { descricao: 'tirar o lixo', concluida: false },
    { descricao: 'lavar a roupa', concluida: true },
  ];
  concluir(item: { concluida: boolean }): void {
    item.concluida = !item.concluida;
  }
  constructor() {}

  ngOnInit(): void {}
}
