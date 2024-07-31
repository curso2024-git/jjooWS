import { Component } from '@angular/core';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { Pelicula } from '../../interfaces/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public titulo: String = "";
  public poster: String = "";

  /* Inyección de servicio  */
  constructor(public gestorPeliculas: GestorpeliculasService) {

  }

  crearPelicula() {
    const nuevaPelicula: Pelicula = {
      titulo: this.titulo,
      poster: this.poster
    }
    this.gestorPeliculas.agregar(nuevaPelicula);
  }

}


