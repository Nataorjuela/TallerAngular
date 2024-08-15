import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';



@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit {

  constructor(private data: DataService, private service: ServiceService){}

  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];
  lAccounts: any[] = [];
  codiUser:string='';
  lsrtNombreCuenta:string='';
  lsrtNumeCuenta:string='';


  ngOnInit(){
    this.GPAccounts = {
      autoResize: {container: '#idgridAccounts', rightPadding: 5},
      enableAutoResize: true,
      gridHeight: 200,
      autoFitColumnsOnFirstLoad: false,
      enableAutoSizeColumns: false,
      autosizeColumnsByCellContentOnFirstLoad: true,
      enableAutoResizeColumnsByCellContent: true
    };
    this.CDAccounts.push({id: 'NumeCuent', name:'Número', field: 'NumeCuen', sortable: true, filterable: true});
    this.CDAccounts.push({id: 'NombCuent', name:'Nombre', field: 'NombCuen', sortable: true, filterable: true});
    this.CDAccounts.push({id: 'CodiUser', name:'Codigo', field: 'CodiUser', sortable: true, filterable: true});

  }

  fnGetAccounts(){
    this.data.fnGetAccounts(this.codiUser).subscribe({
      next: res => {
        this.lAccounts = res;
        this.dsAccounts = res;
    }})
  }

  fnSaveAccount(){
    this.data.fnSaveAccount(this.service.gCodiUser,this.lsrtNombreCuenta,this.lsrtNumeCuenta).subscribe({
      next: res => {
       this.lAccounts=res;
       console.log('res desde save account: ',res);
    }})
  }

    ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnchanges');
    }

    ngDoCheck(): void {
      console.log('ngDoCheck');
    }

    ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
    }



}
