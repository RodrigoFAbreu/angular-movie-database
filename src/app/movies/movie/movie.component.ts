import { Component, Input, input } from '@angular/core';
import { Movie } from '../../../shared/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() movie?: Movie;
}
