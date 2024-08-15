import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit {

  constructor(private data: DataService, public service: ServiceService){}

  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];
  lAccounts: any[] = [];
  codiUser:string='';
  lsrtNombreCuenta:string='';
  lsrtNumeCuenta:string='';
  mensaje:string='';
  bPreguntar: boolean= false;
  public subscription : Subscription = new Subscription();

  ngOnInit(){
    this.codiUser=this.service.gCodiUser;
    this.fnGetAccounts();
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

    if(this.lsrtNombreCuenta == ''){
      this.mensaje='Nombre de cuenta vacio';
      return;
    }
    if(this.lsrtNumeCuenta == ''){
      this.mensaje='Número de cuenta vacio';
      return;
    }
    this.bPreguntar=true;

    this.subscription = this.service.ResObserver$.subscribe((res:any)=>{
      this.subscription.unsubscribe();
      this.bPreguntar=false;
        if(res=='si'){
          this.fnDoSaveAccount();
        }
    });

  }

  fnDoSaveAccount(){this.data.fnSaveAccount(this.service.gCodiUser,this.lsrtNombreCuenta,this.lsrtNumeCuenta).subscribe({
    next: res => {

      if(res[0].Status=="OK"){
        this.mensaje='Cuenta Guardada Correctamente';
      }else{
        this.mensaje='La cuenta no puso ser Guardada - Error:' + res[0].Error;
      }
     this.lAccounts=res;
     console.log('res desde save account: ',res);
     this.codiUser=this.service.gCodiUser;
     this.fnGetAccounts();

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
