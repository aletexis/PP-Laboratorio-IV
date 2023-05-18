import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RepartidorInterface } from 'src/app/models/repartidor-interface';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.scss']
})
export class ListadoRepartidoresComponent implements OnInit {

  @Input() listaRepartidores:RepartidorInterface[];
  @Output() repartidorSelecc = new EventEmitter<RepartidorInterface>();
  public displayedColumns:string[];

  constructor() { 
    this.displayedColumns = ['nombre', 'edad', 'capacidad translado', 'unidad propia', 'nacionalidad', 'acciones'];
  }
  
  ngOnInit(){

  }

  seleccionarRepartidor(rep:RepartidorInterface){
    this.repartidorSelecc.emit(rep);
  }
}
