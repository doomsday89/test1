import { Component, OnInit } from '@angular/core';

import { Tipo } from 'src/app/tipo';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private _service:TransactionsService) { 
    this.getSaldo();
    this._service.Ingreso$.subscribe((aI)=>this.getSaldo());
    this._service.Egreso$.subscribe((aE)=>this.getSaldo());
  }

  ngOnInit(): void {
  }
  SaldoTotal:number;
  IngresoTotal:number;
  EgresoTotal:number;
  //
  getSaldo(){
    this.IngresoTotal=0;
    this.EgresoTotal=0;
    this._service.getAllIngresos().map((obj:Tipo)=>this.IngresoTotal+=obj.Valor);
    this._service.getAllEgresos().map((obj:Tipo)=>this.EgresoTotal+=obj.Valor);
    this.SaldoTotal = this.IngresoTotal - this.EgresoTotal;
  }
}
