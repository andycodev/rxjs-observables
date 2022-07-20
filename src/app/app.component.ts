import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-observables';
  personaje = {
    nombre: '',
    altura: '',
    ojos: ''
  };

  personajeMerge = {
    nombre: '',
    altura: '',
    ojos: '',
    especie: ''
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    /* this.apiService.getData().subscribe((response: any) => {
      this.personaje = response || {};
      console.log('personaje -->', this.personaje);
    }); */

    this.apiService.getAllData().subscribe((response: any) => {
      this.personajeMerge = response;
      console.log('personaje merge-->', response);
    });
    
  }

}
