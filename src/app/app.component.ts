import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myApp';
  lbolUserLogu: boolean=false;
  lstrUser:string='';
  lstrPass:string='';

  LogIn(){
    this.lbolUserLogu=true;
  }
  LogOut(){
    this.lbolUserLogu=false;
  }
}
