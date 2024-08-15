import { Component, DoCheck, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import { ServiceService } from './services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,DoCheck {

  title = 'Mi aplicación bancaria';
  lbolUserLogu: boolean = false;
  lbolUserLogTemp:boolean=false;
  lstrUser: string = 'Robin';
  lstrPass: string = '1234';
  lstrMessag: string = '';

  constructor(private apiService: DataService,public service: ServiceService, private router: Router){}

  ngOnInit():void{
    this.lbolUserLogu= this.lbolUserLogTemp;
  }

  ngDoCheck():void{
    console.log('docheck')
    this.lbolUserLogu=this.lbolUserLogTemp;
  }

  fnLogIN(){
    this.apiService.fnValiUser(this.lstrUser,this.lstrPass).subscribe({next: res =>{
      if (res[0].Status == 'OK'){
        //this.lbolUserLogu = true;
        this.lbolUserLogTemp = true;
        this.lstrMessag = '';
        this.service.gCodiUser = this.lstrUser;
        this.router.navigate(['home']);
      }else{
        this.lbolUserLogu = false;
        this.lstrMessag = res[0].NombUsua;
      }
    },error: err =>{console.log(err)},
    complete: ()=>{
      console.log('Completed')
    }});
  }

  fnLogOut(){
    this.lbolUserLogTemp = false;
  }

  fnSignUp(){
    this.service.lbolSignUp = true;
  }
}
