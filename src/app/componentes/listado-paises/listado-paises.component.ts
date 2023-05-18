import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.scss']
})
export class ListadoPaisesComponent implements OnInit {
  
  public listaPaises:any;
  @Output() paisSeleccionado = new EventEmitter<any>();

  constructor(
    private paisService:PaisesService
  ) { }

  ngOnInit(): void {
    this.paisService.obtenerPaises("all").subscribe(x =>{
      this.listaPaises = x;
    });
  }

  onPais(pais){
    this.paisSeleccionado.emit(pais);
  }

}
