
import { Form } from './../form';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Room } from './IRoom';
import {SingleRoom} from './ISingleRoomDescription'
import { HttpParams, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4200/api/findrooms';

  getRoom(): Observable<Room> {
    return this.http.get<Room>('https://hotelapi-backend.herokuapp.com/api/roomdto/test1');
  }

  getSingleRoom(id: number): Observable<SingleRoom> {
    return this.http.get<SingleRoom>(`http://localhost:4200/api/room/id/${id}`);
  }




  sendForm(form) {
    return this.http.post<any>(this.url, form);


  }

}
