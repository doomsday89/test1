import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/tipo';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  constructor(private _service:TransactionsService) { 
    this.aEgresos=this._service.getAllEgresos();
    this._service.Egreso$.subscribe((a)=>this.aEgresos=a);
  }

  ngOnInit(): void {
  }
  aEgresos:Tipo[];
  QuitarEgreso(o:Tipo){
    this._service.QuitarEgreso(o);
  }
}
