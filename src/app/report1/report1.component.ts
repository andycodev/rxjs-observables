import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StateService } from '../state.service';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {

  filtros = {
    name: '',
    age: '',
    ageAltered: ''
  }

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    this.stateService.filters$
    .pipe(
      map((response: any) => ({
        name: response?.name || null,
        age: response?.age || null,
        ageAltered: Number(response?.age) + 5 || null 
      }))
    )
    .subscribe((response: any) => {
      this.filtros = response;
      console.log('Filtros repor1 -->', this.filtros);
    })
  }

}
