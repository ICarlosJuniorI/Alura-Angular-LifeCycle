import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() itemParaEditar = new EventEmitter();
  @Output() itemParaExcluir = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnDestroy(): void {}

  editarItem() {
    this.itemParaEditar.emit(this.item);
  }

  marcaComprado() {
    this.item.comprado = !this.item.comprado;
  }

  excluirItem() {
    this.itemParaExcluir.emit(this.item.id);
  }
}
