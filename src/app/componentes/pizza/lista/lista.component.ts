import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PizzaInterface } from 'src/app/models/pizza-interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() listaPizzas:PizzaInterface[];
  @Output() pizzaSeleccionada = new EventEmitter<PizzaInterface>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPizza(pizza:PizzaInterface){
    this.pizzaSeleccionada.emit(pizza);
  }

}
