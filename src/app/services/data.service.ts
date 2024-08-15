import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable,catchError } from 'rxjs';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

//apiUrl: string = 'https://erpapipruebas.azurewebsites.net/api/';

apiUrlValiUser: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiuser';
apiUrlGetAccounts: string = 'https://erpapipruebas.azurewebsites.net/api/values/GetAccounts';
apiUrlValiProf: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiprof';
apiUrlSingUp: string = 'https://erpapipruebas.azurewebsites.net/api/values/signup';

//Función para validar un usuario

fnValiUser(CodiUser: string, PassUser: string): Observable<any>{

  let UserInfo: any[] = [];
  UserInfo.push({'CodiUser':CodiUser, 'PassUser': PassUser});

  return this.http.post(this.apiUrlValiUser,UserInfo,httpOptions).pipe(tap((res: any) => {
    return res;
  }));
}


fnGetAccounts(CodiUser: string): Observable<any>{
  let User: any[]=[];
  User.push({'CodiUser':CodiUser});

  return this.http.post(this.apiUrlGetAccounts,User,httpOptions).pipe(tap((res: any) => {
    return res;
  }));
}

fnValidProfile(CodiUser: string): Observable<any>{

  let UserInfo: any[] = [];
  UserInfo.push({'CodiUser':CodiUser});

  return this.http.post(this.apiUrlValiProf,UserInfo,httpOptions).pipe(tap((res: any) => {
    return res;
  }));
}

fnSignUp(CodiUser: string,nameUser:string,password:string): Observable<any>{

  let UserInfo: any[] = [];
  UserInfo.push({'CodiUser':CodiUser,'NombUser':nameUser,'PassUser':password});

  return this.http.post(this.apiUrlSingUp,UserInfo,httpOptions).pipe(tap((res: any) => {
    console.log(res);
    return res;
  }));
}










}



