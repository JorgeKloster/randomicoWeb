import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  serie : number[] = [];

  public createRandomNumber(){
    this.serie.push(Math.round(Math.random() * (100-1) + 1));
  }

  public getRandomNumber(){
    console.log(this.serie);
    return this.serie;
  }
}
