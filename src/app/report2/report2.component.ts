import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.scss']
})
export class Report2Component implements OnInit {

  filtros = {
    name: '',
    age: ''
  }

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    this.stateService.filters$.subscribe((response: any) => {
      this.filtros = response;
      console.log('Filtros report2-->', this.filtros);
    })
  }

}
