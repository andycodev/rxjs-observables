import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ApiService } from './api.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-observables';
/*   personaje = {
    nombre: '',
    altura: '',
    ojos: ''
  }; */

  personajeMerge = {
    nombre: '',
    descripcion: '',
    altura: '',
    ojos: '',
    especie: ''
  }
  loading = true;

  form: FormGroup;

  constructor(
    private apiService: ApiService,
    private stateService: StateService
    ) {

    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    })

  }

  ngOnInit(){
    /* this.apiService.getData().subscribe((response: any) => {
      this.personaje = response || {};
      console.log('personaje -->', this.personaje);
    }); */

    this.apiService.getAllData().subscribe((response: any) => {
      this.personajeMerge = response;
      this.loading = false;
      /* console.log('personaje merge-->', response); */
    });

    this.form.get('name')?.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(response => {
      console.log('value-->', response);
    })

    
  }

  filter(){
    this.stateService.filtersSource.next(this.form.value);
  }

}
