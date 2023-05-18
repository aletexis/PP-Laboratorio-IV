import { Component, Input, OnInit } from '@angular/core';
import { RepartidorInterface } from 'src/app/models/repartidor-interface';

@Component({
  selector: 'app-detalle-repartidores',
  templateUrl: './detalle-repartidores.component.html',
  styleUrls: ['./detalle-repartidores.component.scss']
})
export class DetalleRepartidoresComponent implements OnInit {

  @Input() repartidorSeleccionado:RepartidorInterface;

  constructor() { }

  ngOnInit(): void {
  }
}
