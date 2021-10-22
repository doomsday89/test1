import {AngularFirestore} from '@angular/fire/firestore';

import { EventEmitter, Injectable } from '@angular/core';
import { Tipo } from './tipo';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private _firestore:AngularFirestore) { }
  aIngresos:Tipo[]=[
    new Tipo("1","Salario",17500),
    new Tipo("2","Salario2",500)
  ];
  aEgresos:Tipo[]=[
    new Tipo("1","Renta",1750),
    new Tipo("2","Lavadora",250)
  ];
  Ingreso$=new EventEmitter<Tipo[]>();
  Egreso$=new EventEmitter<Tipo[]>();
  //Methods
  getAllIngresos(){
    return this.aIngresos;
  }
  getAllEgresos(){
    return this.aEgresos;
  }
  AgregarIngreso(o:Tipo){
    this.aIngresos.push(o);
    this.Ingreso$.emit(this.aIngresos);
  }
  QuitarIngreso(o:Tipo){
    this.aIngresos.splice(this.aIngresos.indexOf(o),1);
    this.Ingreso$.emit(this.aIngresos);
  }
  AgregarEgreso(o:Tipo){
    this.aEgresos.push(o);
    this.Egreso$.emit(this.aEgresos);
  }
  QuitarEgreso(o:Tipo){
    this.aEgresos.splice(this.aEgresos.indexOf(o),1);
    this.Egreso$.emit(this.aEgresos);
  }
  getIngresos(){
    return this._firestore.collection('Ingresos',ref=>ref.orderBy('Fecha')).snapshotChanges();
  }
  addIngreso(oIngreso){
    return this._firestore.collection('Ingresos').add(oIngreso);
  }
  getEgresos()
  {
    return this._firestore.collection('Egresos',ref=>ref.orderBy('Fecha')).snapshotChanges();
  }
  addEgreso(oEgreso){
    return this._firestore.collection('Egresos').add(oEgreso);
  }
}
