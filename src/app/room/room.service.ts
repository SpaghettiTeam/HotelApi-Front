import { AuthService } from './../auth0/auth0.service';
import { Form } from './../form';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Room } from './IRoom';
import { HttpParams, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient, private auth0: AuthService) { }

  url = 'http://hotelapii-backend.herokuapp.com/api/findrooms';
  getRoom(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>('http://hotelapii-backend.herokuapp.com/api/room/all');
  }
  temp(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth0.idToken
      })
    };
    console.log(httpOptions);
    this.http.get('http://hotelapii-backend.herokuapp.com/api/logged', httpOptions).map((res: Response) => (
      res.text() // Convert response to a string
      ))
  .subscribe(data => {
    console.log(data); });
  }


  sendForm(form: Form) {
    console.log(JSON.stringify(form));
    return this.http.post<any>(this.url, form );
}


}
