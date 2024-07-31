import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class GestorpeliculasService {
  peliculas: Pelicula[] = [];


  constructor() { }
  agregar(pelicula: Pelicula): void {
    this.peliculas.push(pelicula);
  }
}
