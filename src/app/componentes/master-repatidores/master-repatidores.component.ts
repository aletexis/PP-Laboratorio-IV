import { Component, OnInit } from '@angular/core';
import { RepartidorInterface } from 'src/app/models/repartidor-interface';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-master-repatidores',
  templateUrl: './master-repatidores.component.html',
  styleUrls: ['./master-repatidores.component.scss']
})
export class MasterRepatidoresComponent implements OnInit {

  public listaRepartidores:RepartidorInterface[];
  public repartidorSelec:RepartidorInterface;

  constructor(
    private fs:FirebaseService
  ) { }

  ngOnInit(): void {
    this.fs.getAll('repartidores').subscribe(rep => {
      this.listaRepartidores = rep as RepartidorInterface[];
    });
  }

  repSelec(e){
    this.repartidorSelec = e;
    console.log(this.repartidorSelec);
  }

}
