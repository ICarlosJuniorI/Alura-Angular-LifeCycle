import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;

  valorItem!: string;
  editando: boolean = false;
  textoBtn: string = 'Salvar item';

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  adicionarItem() {
    if (this.valorItem !== '') {
      this.listaService.adicionarItemNaLista(this.valorItem);
    }

    this.limparCampo();
  }

  editarItem() {
    this.listaService.editarItemDaLista(
      this.itemQueVaiSerEditado,
      this.valorItem
    );

    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

  limparCampo() {
    this.valorItem = '';
  }
}
