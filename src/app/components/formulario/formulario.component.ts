import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/tipo';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private _service:TransactionsService) { }

  ngOnInit(): void {
  }
  oTipo={} as Tipo;
  //Methods
  AgregarI(){
      //this._service.AgregarIngreso(new Tipo("",this.oTipo.Descripcion,this.oTipo.Valor));
      this._service.addIngreso({
        'Fecha': this.oTipo.Fecha,
        'Descripcion':this.oTipo.Descripcion,
        'Valor':this.oTipo.Valor
      });
    }
    AgregarE(){
      this._service.AgregarEgreso(this.oTipo);
    }
}
