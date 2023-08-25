import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-number-display-component',
  templateUrl: './number-display-component.component.html',
  styleUrls: ['./number-display-component.component.css']
})
export class NumberDisplayComponentComponent {
  public serie : number[] = [];

  constructor(private dataService : DataServiceService){ 
    this.serie = this.dataService.getRandomNumber();
  }
} 
