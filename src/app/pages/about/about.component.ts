import { Component } from '@angular/core';
import { FooterNavigationComponent } from '../../shared/footer-navigation/footer-navigation.component';

@Component({
  selector: 'app-about',
  imports: [FooterNavigationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent {

}
