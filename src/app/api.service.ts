import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, of, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  SW_API = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.SW_API}/people/2`).pipe(
      map((response: any) => ({
        nombre: response.name,
        altura: `${response.height} cm`,
        ojos: (response.eye_color as String).toUpperCase(),
      }))
    );
  }

  getAllData() {
    return this.http.get(`${this.SW_API}/people/2`).pipe(
      mergeMap((response: any) =>
        zip(of(response), this.http.get(response.species[0]))
      ),
      map(([personaje, especie]: any[]) => ({
        nombre: personaje.name,
        altura: `${personaje.height} cm`,
        ojos: (personaje.eye_color as String).toUpperCase(),
        descripcion: 'Personaje de la película de Start Wars',
        especie: especie.name,
      }))
    );
  }
}
