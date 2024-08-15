import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  nameUser:string='';
  password:string='';
  codiUser:string='';
  lblMensaje: string='';

  constructor(public service: ServiceService,private dataService:DataService ){}

  fnCancel(){
    this.service.lbolSignUp = false;
  }

  fnSignUp(){
    let res = this.dataService.fnSignUp(this.codiUser,this.nameUser,this.password).subscribe({
      next: res =>{
        if(res[0].Status =='OK'){
          console.log("Registro exitoso");
          this.lblMensaje= 'Registro Exitoso';
        }else{
        console.log("Registro Fallido")
          this.lblMensaje= 'Registro Fallido';
        }
      },
    })
  }




}
