import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CategoryModel } from '../../models/CategoryModel';

@Component({
  selector: 'app-category-recipes',
  imports: [NgFor, RouterLink],
  templateUrl: './category-recipes.component.html',
  styleUrl: './category-recipes.component.scss'
})
export class CategoryRecipesComponent {
  @Input()
  categories!: CategoryModel[];
}
