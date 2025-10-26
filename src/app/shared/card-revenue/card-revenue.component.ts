import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevenueModel } from '../../models/RevenueModel';

@Component({
  selector: 'app-card-revenue',
  templateUrl: './card-revenue.component.html',
  styleUrl: './card-revenue.component.scss',
  imports: [RouterLink],
  standalone: true
})
export class CardRevenueComponent implements OnInit {
  @Input() revenue!: RevenueModel;

  constructor() { }

  ngOnInit(): void {
    console.log('Objeto recebido:', this.revenue.title);
  }

}
