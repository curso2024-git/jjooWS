import { Component } from '@angular/core';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { PeliculaComponent } from "../pelicula/pelicula.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [PeliculaComponent, CommonModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {

  /* Inyectamos servicios */
  constructor(public gestorPeliculas: GestorpeliculasService) {

  }

}
