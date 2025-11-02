import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoModel } from '../../models/ProdutoModel';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.scss',
  imports: [RouterLink],
  standalone: true
})
export class CardProdutoComponent implements OnInit {
  @Input() produto!: ProdutoModel;

  constructor() { }

  ngOnInit(): void {
    if (this.produto) {
      console.log('Objeto recebido no filho:', this.produto.nome);
    }
  }

}
