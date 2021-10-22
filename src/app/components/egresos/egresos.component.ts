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
    //this.SubTotal(this._service.getAllEgresos());
    this._service.getEgresos().subscribe(data=>{
      data.forEach((element)=>{
        this.aEgresos.push(element.payload.doc.data());
      });
      this.SubTotal(this.aEgresos);
    });
    this._service.Egreso$.subscribe((a)=>this.aEgresos=a);
  }

  ngOnInit(): void {
  }
  aEgresos:any[]=[];
  EgresoTotal:number=0;
  QuitarEgreso(o:Tipo){
    this._service.QuitarEgreso(o);
  }
  SubTotal(a:any[]){
    this.aEgresos=a;
    this.EgresoTotal=0;
    this.aEgresos.map((obj:Tipo)=>this.EgresoTotal+=obj.Valor);
    this.aEgresos.forEach(element => {element.Fecha=new Date(element.Fecha)    });
  }
}
