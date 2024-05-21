import { Component } from '@angular/core';
import { Movie } from '../../../shared/movie';
import { CommonModule } from '@angular/common';
import { MovieComponent } from "../movie/movie.component";

@Component({
  selector: 'app-movies-list',
  standalone: true,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  imports: [CommonModule, MovieComponent]
})
export class MoviesListComponent {
  // Change to get from service
  movieList: Movie[] = [
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
    {
      id: 1,
      name: 'testMovie',
      image: 'https://th.bing.com/th/id/OIP.FNNkmRM_517_P-peRtPkAgHaKX?rs=1&pid=ImgDetMain',
      genre: 'Drama',
      releaseYear: 2024
    },
  ]
}
