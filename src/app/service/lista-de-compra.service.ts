import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];

  diaDaSemana: string = '';

  constructor() {
    // Busca a lista de compras no localStorage
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) {
    // Pega o dia da semana
    const dataAtual = new Date().getDay();
    // Verifica qual o dia da semana
    switch (dataAtual) {
      case 0:
        this.diaDaSemana = 'Domingo';
        break;
      case 1:
        this.diaDaSemana = 'Segunda-feira';
        break;
      case 2:
        this.diaDaSemana = 'Terça-feira';
        break;
      case 3:
        this.diaDaSemana = 'Quarta-feira';
        break;
      case 4:
        this.diaDaSemana = 'Quinta-feira';
        break;
      case 5:
        this.diaDaSemana = 'Sexta-feira';
        break;
      case 6:
        this.diaDaSemana = 'Sábado';
        break;
      default:
        this.diaDaSemana = 'Dia inválido';
        break;
    }

    const id = this.listaDeCompra.length + 1;
    // Pega a data atual
    const dataItem = new Date().toLocaleDateString('pt-BR');
    // Pega a hora atual
    const horaItem = new Date().toLocaleTimeString('pt-BR');

    // Cria o item novo
    const item: Item = {
      id,
      nome: nomeDoItem,
      data: `${this.diaDaSemana} (${dataItem}) às ${horaItem}`,
      comprado: false,
    };

    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
    // this.atualizarLocalStorage();
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    // Passa o nome novo pro item selecionado
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };

    const id = itemAntigo.id;
    // Remove o item selecionado e substitui pelo item editado
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
    // this.atualizarLocalStorage();
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
