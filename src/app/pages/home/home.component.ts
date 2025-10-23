import { Component } from '@angular/core';

import { HeaderNavigationComponent } from "../../shared/header-navigation/header-navigation.component";
import { FooterNavigationComponent } from "../../shared/footer-navigation/footer-navigation.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderNavigationComponent, FooterNavigationComponent],
  standalone: true,
})
export class HomeComponent {

}
