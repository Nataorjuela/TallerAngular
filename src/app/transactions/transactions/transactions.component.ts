import { Component,OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  constructor(private dataService:DataService,public service:ServiceService){}

sTipo: string = '';
sNumeroCuenta: string = '';
sAmount: string = '';
sCategoria: string = '';
sDescripcion: string = '';
sEstado: string = '';
respuesta: string = '';
bValidar: boolean = false;
columnDefinitions: Column[] = [];
GOTransactions: GridOption = {};
transactions: any[] = [];

public subscription : Subscription = new Subscription();


ngOnInit(){

  this.GOTransactions = {
    autoResize: {container: '#idgridTransactions', rightPadding: 5},
    enableAutoResize: true,
    gridHeight: 200,
    autoFitColumnsOnFirstLoad: false,
    enableAutoSizeColumns: false,
    autosizeColumnsByCellContentOnFirstLoad: true,
    enableAutoResizeColumnsByCellContent: true
  };

  this.columnDefinitions.push({id: 'NumeTran', name:'NumeTran', field: 'NumeTran', sortable: true, filterable: true});
  this.columnDefinitions.push({id: 'Type', name:'Type', field: 'Type', sortable: true, filterable: true});
  this.columnDefinitions.push({id: 'Date', name:'Date', field: 'Date', sortable: true, filterable: true});
  this.columnDefinitions.push({id: 'Amount', name:'Amount', field: 'Amount', sortable: true, filterable: true});
  this.columnDefinitions.push({id: 'Category', name:'Category', field: 'Category', sortable: true, filterable: true});
  this.columnDefinitions.push({id: 'Description', name:'Description', field: 'Description', sortable: true, filterable: true});
  this.columnDefinitions.push({id: 'Status', name:'Status', field: 'Status', sortable: true, filterable: true});
  this.columnDefinitions.push({id: 'Balance', name:'Balance', field: 'Balance', sortable: true, filterable: true});
}

fnSaveTransaction(){
  this.bValidar=true;
  this.subscription = this.service.ResObserver$.subscribe((res:any)=>{
    this.subscription.unsubscribe();
    this.bValidar=false;
      if(res=='si'){
        this.fnDoSaveTransaction();
      }
  });
}

fnDoSaveTransaction(){
  this.dataService.fnSaveTransaction(this.sTipo,this.sNumeroCuenta,this.sAmount,this.sCategoria,
    this.sDescripcion,this.sEstado).subscribe({
      next: res => {
        console.log(res);
        var lRow= res[0];
        for(var i in lRow){
          if(i=="Error"){
            this.respuesta=res[0].Error;
            return;
          }
        }
        this.transactions=this.fnCalcBalances(res);
        this.respuesta= "Guardado exitoso";
      }
  });
}

fnCalcBalances(transactions:any[]): any[] {
 var saldo:number=0;
  for(var i = transactions.length-1;i>=0;i--){
    if(transactions[i].Type=='Deposito'){
      saldo +=transactions[i].Amount;
    }else{
      saldo-=transactions[i].Amount;
    }
    transactions[i].Balance=saldo;
  }
  return transactions;
}


}
