import { Component, OnInit } from '@angular/core';
import { PizzaInterface } from 'src/app/models/pizza-interface';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  listaPizzas:PizzaInterface[];
  pizzaSelecc:PizzaInterface;

  constructor(private afs:FirebaseService) { }

  ngOnInit(): void {
    this.afs.getAll('pizzas').subscribe(pizzas => {
      this.listaPizzas = pizzas as PizzaInterface[];
    })
  }

  crearPizza(pizza:PizzaInterface){
    this.afs.setObj('pizzas', pizza).then(x => {
      console.log(x);
    });
  }

  pizzaSeleccionada(pizza:PizzaInterface){
    this.pizzaSelecc = pizza;
  }

  modificarPizza(pizza:PizzaInterface){
    this.afs.setObj('pizzas', pizza).then(x =>{
      this.pizzaSelecc = pizza;
      console.log(x);
    });
  }

  borrarPizza(pizza:PizzaInterface){
    this.afs.removeObj('pizzas', pizza).then(x => {
      this.pizzaSelecc = null;
      console.log(x);
    });
  }
}
