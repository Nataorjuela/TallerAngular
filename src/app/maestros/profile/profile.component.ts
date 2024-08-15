import { Component, OnDestroy, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
import {debounceTime} from 'rxjs/operators';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent implements OnInit,OnDestroy{

  codiUser: string='';
  nameUser:string='';
  password:string='';
  codiUser2: string='';


  constructor(private data: DataService){}

  ngOnInit():void{
   console.log('onInit');
   const evKeyUp = fromEvent(document, 'keyup');
   const result = evKeyUp.pipe(debounceTime(300));
   result.subscribe({next: (x)=>{
    var target = x.target as HTMLInputElement;
    if(target.name =='codiUser2'){
      console.log(target);
      this.fnValidProfile();
      }
    }})
  }

  ngOnDestroy():void{
    console.log('onDestroy')
  }

  fnGetAccounts(){
    this.data.fnGetAccounts('Pedro').subscribe({next: res => {
        console.log(res);
    }})
  }


  fnValidProfile(){
    this.data.fnValidProfile(this.codiUser2).subscribe({next:res =>{
        this.nameUser=res[0].NombUsua        ;
        this.password=res[0].PassUser;
        console.log(res);
      }
    })
  }


}
