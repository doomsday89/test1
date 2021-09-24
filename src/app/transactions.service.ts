import { EventEmitter, Injectable } from '@angular/core';
import { Tipo } from './tipo';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }
  aIngresos:Tipo[]=[
    new Tipo("Salario",17500),
    new Tipo("Salario2",500)
  ];
  aEgresos:Tipo[]=[
    new Tipo("Renta",1750),
    new Tipo("Lavadora",250)
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
}
