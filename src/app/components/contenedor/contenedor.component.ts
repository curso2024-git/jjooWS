import { Component } from '@angular/core';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { PeliculaComponent } from "../pelicula/pelicula.component";
import { CommonModule } from '@angular/common';
/* Import para el filtro */
import { Pelicula } from '../../interfaces/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [PeliculaComponent, CommonModule, FormsModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  /* Atributos para filtro */
  public filtro: string = "";
  public peliculasFiltradas: Pelicula[] = [];

  /* Inyectamos servicios */
  constructor(public gestorPeliculas: GestorpeliculasService) {
    /* Añadimos filtro -> inicializamos con el array de service */
    this.peliculasFiltradas = gestorPeliculas.peliculas;

  }

  buscar(): void {
    this.peliculasFiltradas = this.gestorPeliculas.peliculas.filter(pelicula => {
      return pelicula.titulo.includes(this.filtro);
    });
  }

}
