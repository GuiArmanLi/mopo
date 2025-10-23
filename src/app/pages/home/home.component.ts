import { Component } from '@angular/core';

import { HeaderNavigationComponent } from "../../shared/header-navigation/header-navigation.component";
import { FooterNavigationComponent } from "../../shared/footer-navigation/footer-navigation.component";
import { CardProdutoComponent } from '../../shared/card-produto/card-produto.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderNavigationComponent, CardProdutoComponent, FooterNavigationComponent],
  standalone: true,
})
export class HomeComponent {

}
