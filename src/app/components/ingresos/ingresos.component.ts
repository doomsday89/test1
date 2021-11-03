import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Tipo } from 'src/app/tipo';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor(private _service:TransactionsService) {     
    //this.SubTotal(this._service.getAllIngresos());
    this.GetIngresos();
    this._service.Ingreso$.subscribe((a)=>this.SubTotal());    
  }

  ngOnInit(): void {
  }
  aIngresos:any[]=[];
  IngresoTotal:number;

  QuitarIngreso(o:Tipo){
  //  this._service.QuitarIngreso(o);
  this._service.deleteIngreso(o.Id)
  .then(()=>this.SubTotal())
  .catch(err=>console.log(err))
  }
  GetIngresos(){
    this._service.getIngresos().subscribe(data=>{
      data.forEach((elemento,i)=>{
        this.aIngresos.push(elemento.payload.doc.data());
        const obj:Tipo=this.aIngresos[i];
        obj.Id=elemento.payload.doc.id;
      });
      this.SubTotal();
    });
  }
  SubTotal(){    
    this.IngresoTotal=0;
    this.aIngresos.map((obj:Tipo)=>this.IngresoTotal+=obj.Valor); 
    
  }
  
}
