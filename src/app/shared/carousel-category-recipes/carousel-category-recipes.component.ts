import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CategoryModel } from '../../models/CategoryModel';
import { CategoryRecipesComponent } from "../category-recipes/category-recipes.component";
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-carousel-category-recipes',
  standalone: true,
  imports: [CategoryRecipesComponent, CommonModule, NgForOf],
  templateUrl: './carousel-category-recipes.component.html',
  styleUrl: './carousel-category-recipes.component.scss'
})
export class CarouselCategoryRecipesComponent implements OnChanges {
  @Input() categories!: CategoryModel[];
  @Input() visibleCount!: number;

  currentIndex = 0;
  totalPages = 0;
  pagedCategories: CategoryModel[][] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categories'] || changes['visibleCount']) {
      this.updatePagedCategories();
    }
  }

  private updatePagedCategories(): void {
    if (!this.categories || this.categories.length === 0 || this.visibleCount <= 0) {
      this.pagedCategories = [];
      this.totalPages = 0;
      this.currentIndex = 0;
      return;
    }

    this.pagedCategories = [];
    for (let i = 0; i < this.categories.length; i += this.visibleCount) {
      this.pagedCategories.push(this.categories.slice(i, i + this.visibleCount));
    }
    this.totalPages = this.pagedCategories.length;

    if (this.currentIndex >= this.totalPages) {
      this.currentIndex = Math.max(0, this.totalPages - 1);
    }
  }

  next() {
    if (this.currentIndex < this.totalPages - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0)
      this.currentIndex--;
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
