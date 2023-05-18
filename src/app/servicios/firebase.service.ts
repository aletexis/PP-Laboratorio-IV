import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PeliculaInterface } from '../models/pelicula-interface';
import { map } from 'rxjs/operators';
import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private afs: AngularFirestore){
  }

  getAll(entidad:string){
    return this.afs.collection(entidad).valueChanges();
  }

  setObj(entidad:string, obj:any){
    return this.afs.collection(entidad).doc(obj.id).set(obj, {merge: true});
  }

  removeObj(entidad:string, obj:any){
    return this.afs.collection(entidad).doc(obj.id).delete();
  }

  getWithFilter(entidad:string, campo:string, value:string){
    return this.afs.collection(entidad, ref => ref.where(campo, '==', value)).valueChanges();
  }

}
