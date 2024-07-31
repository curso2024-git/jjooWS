import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  @Input() pelicula: Pelicula | undefined;

}
