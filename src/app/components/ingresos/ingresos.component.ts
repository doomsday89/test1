import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/tipo';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor(private _service:TransactionsService) {     
    this.SubTotal(this._service.getAllIngresos());
    this._service.Ingreso$.subscribe((a)=>this.SubTotal(a));    
  }

  ngOnInit(): void {
  }
  aIngresos:Tipo[];
  IngresoTotal:number;

  QuitarIngreso(o:Tipo){
    this._service.QuitarIngreso(o);
  }
  SubTotal(a:Tipo[]){
    this.aIngresos=a;
    this.IngresoTotal=0;
    this.aIngresos.map((obj:Tipo)=>this.IngresoTotal+=obj.Valor);
  }
}