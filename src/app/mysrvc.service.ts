import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MysrvcService {

  constructor() { }

  movies=[
    {name:'Spiderman',Language:'English'},
    {name:'Robo',Language:'Telugu'},
    {name:'Dangal',Language:'Hindi'}
  ]
  public getMovies(){
    return this.movies;
  }
}
