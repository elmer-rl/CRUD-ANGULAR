import { Futbolista } from './../modelo/futbolista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  futbolistaArray: Futbolista[] = [
    {id: 1, nombre: 'Ronaldo', pais: 'portugal'},
    {id: 1, nombre: 'Messi', pais: 'argentina'},
    {id: 1, nombre: 'Neymar', pais: 'Brazil'}
  ]

  nuevoFutbolista: Futbolista = new Futbolista();

  agregar(){
    if (this.nuevoFutbolista.id === 0) {
      this.nuevoFutbolista.id =  this.futbolistaArray.length +1 ;
      this.futbolistaArray.push(this.nuevoFutbolista);
    }

    // console.log(this.nuevoFutbolista);
    this.nuevoFutbolista = new Futbolista();
  }

  editar(futbolista: Futbolista){
    this.nuevoFutbolista= futbolista;
  }


  eliminar () {
    if(confirm ('estas seguro de eliminar')){
      this.futbolistaArray = this.futbolistaArray.filter(x => x != this.nuevoFutbolista);
    this.nuevoFutbolista = new Futbolista;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
