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
    this.GetEgresos();
    this._service.Egreso$.subscribe((a)=>this.aEgresos=a);
  }

  ngOnInit(): void {
  }
  aEgresos:any[]=[];
  EgresoTotal:number=0;
  QuitarEgreso(o:Tipo){
    //this._service.QuitarEgreso(o);
    this._service.deleteEgreso(o.Id)
    .then(()=>{
      alert('registro eliminado');
    }) 
    .catch((err)=>console.log(err));
  }

  GetEgresos(){
    this.aEgresos=[];
    this._service.getEgresos().subscribe(data=>{
      data.forEach((elemento,i)=>{
        this.aEgresos.push(elemento.payload.doc.data());
        const obj:Tipo=this.aEgresos[i];
        obj.Id=elemento.payload.doc.id;
      });
      this.SubTotal();
    })
  }
  SubTotal(){    
    this.EgresoTotal=0;
    this.aEgresos.map((obj:Tipo)=>this.EgresoTotal+=obj.Valor);
    //this.aEgresos.forEach(element => {element.Fecha=new Date(element.Fecha)    });
  }
}
