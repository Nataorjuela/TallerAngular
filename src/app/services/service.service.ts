import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  lbolSignUp: boolean = false;
  lstrUser: string = '';
  gCodiUser: string= '';

  private ResSubject = new Subject<any>();
  public ResObserver$ = this.ResSubject.asObservable();

  constructor() { }

  fnSetResObserver(pvstrObserver:any){
    this.ResSubject.next(pvstrObserver);
  }
}
