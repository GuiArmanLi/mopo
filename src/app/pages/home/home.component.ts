import { Component, OnInit } from '@angular/core';

import { HeaderNavigationComponent } from "../../shared/header-navigation/header-navigation.component";
import { FooterNavigationComponent } from "../../shared/footer-navigation/footer-navigation.component";
import { CardProdutoComponent } from '../../shared/card-produto/card-produto.component';
import { ProdutoModel } from '../../models/ProdutoModel';
import { ProdutosService } from '../../services/produtos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderNavigationComponent, CardProdutoComponent, CommonModule, FooterNavigationComponent],
  standalone: true,
})
export class HomeComponent implements OnInit {
  produtos: ProdutoModel[] = [];
  errorMessage: string = "";

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtosService.getProdutos().subscribe(
      {
        next: (dados) => { this.produtos = dados; },
        error: (erro) => {
          console.log("Erro ao buscar produtos: ", erro);
        },
        complete: () => {
          console.log("Requisicao de alimentos finalizada.");
        }
      });
  }
}
