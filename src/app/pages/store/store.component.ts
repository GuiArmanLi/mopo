import { Component } from '@angular/core';
import { FooterNavigationComponent } from '../../shared/footer-navigation/footer-navigation.component';
import { HeaderNavigationComponent } from "../../shared/header-navigation/header-navigation.component";

@Component({
  selector: 'app-store',
  imports: [FooterNavigationComponent, HeaderNavigationComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

}
