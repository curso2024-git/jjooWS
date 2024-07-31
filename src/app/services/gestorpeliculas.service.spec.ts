import { TestBed } from '@angular/core/testing';

import { GestorpeliculasService } from './gestorpeliculas.service';

describe('GestorpeliculasService', () => {
  let service: GestorpeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorpeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
