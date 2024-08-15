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

  constructor(public service: ServiceService,private dataService:DataService ){}

  fnCancel(){
    this.service.lbolSignUp = false;
  }

  fnSignUp(){
    let res = this.dataService.fnSignUp(this.codiUser,this.nameUser,this.password).subscribe({
      next: res =>{
        console.log(res);
      }
    })
    console.log("Quedo Registrado");
  }


}
