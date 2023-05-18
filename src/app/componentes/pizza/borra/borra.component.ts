import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PizzaInterface } from 'src/app/models/pizza-interface';

@Component({
  selector: 'app-borra',
  templateUrl: './borra.component.html',
  styleUrls: ['./borra.component.scss']
})
export class BorraComponent implements OnInit {
  
  @Input() pizza:PizzaInterface;
  @Output() pizzaBorrada = new EventEmitter<PizzaInterface>();
  
  constructor() { }

  ngOnInit(): void {
  }

  borrarPizza(){
    this.pizzaBorrada.emit(this.pizza);
  }
}
