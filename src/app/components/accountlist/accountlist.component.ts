import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Imodels';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  constructor(private _service:TransactionsService) { 
    this.aCuentas=this._service.getAccounts();
  }

  ngOnInit(): void {
  }
  aCuentas:Account[]=[];
}
