import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.css']
})
export class RandomNumberComponentComponent {

    constructor(private dataService: DataServiceService){
    }

    createNumber(){
      this.dataService.createRandomNumber();
    }

}

