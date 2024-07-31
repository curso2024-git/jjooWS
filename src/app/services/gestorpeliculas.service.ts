import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestorpeliculasService {

  /* Http Headers */
  static httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  static URL: string = "https://test2prueba.free.beeceptor.com";
  static PATH = "/todos";

  peliculas: Pelicula[] = [];

  //constructor() { } //inicial

  /* Http Client */
  constructor(private clienteHttp: HttpClient) {
    this.clienteHttp.get<Pelicula[]>(`${GestorpeliculasService.URL}${GestorpeliculasService.PATH}`)
      .forEach(data => {
        data.forEach(pelicula => {
          this.peliculas.push(pelicula);
        });
      })
  }

  agregar(pelicula: Pelicula): void {
    this.peliculas.push(pelicula);
  }
}
