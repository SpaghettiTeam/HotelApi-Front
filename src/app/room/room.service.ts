import { Form } from './../form';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Room } from './IRoom';
import { HttpParams, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  url = ' ';
  getRoom(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>('');
  }
  sendForm(form: Form) {
    return this.http.post<any>(this.url, form );
}
}
