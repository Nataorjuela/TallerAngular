import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

//apiUrl: string = 'https://erpapipruebas.azurewebsites.net/api/';

apiUrlValiUser: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiuser';
apiUrlGetAccounts: string = 'https://erpapipruebas.azurewebsites.net/api/values/GetAccounts';

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

}



