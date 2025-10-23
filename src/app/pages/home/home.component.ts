import { Component } from '@angular/core';
import { FooterNavigationComponent } from "../../shared/footer-navigation/footer-navigation.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [FooterNavigationComponent],
  standalone: true,
})
export class HomeComponent {

}
