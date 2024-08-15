import { Component } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  lbolUserLogu: boolean = false;
  ldtFecha = new Date();
  lnumValor: number = 123456789;
  lnumPerc: number = 0.87564;
  lstrTexto: string = 'Hoy es la clase del martes';

    public lSubscription: Subscription = new Subscription;

    constructor(private service:ServiceService){}

    fnActiveObserver(){
      this.lSubscription = this.service.ResObserver$.subscribe((res:any)=>{
        this.lSubscription.unsubscribe();
        console.log(res);
      });
    }

    fnTestObserver(){
      setTimeout(()=>{
        console.log('Fin del timeOut')
        this.service.fnSetResObserver('Fin del time out. Simulación de acción del usuario o trigger')
      },5000)
    }








}
