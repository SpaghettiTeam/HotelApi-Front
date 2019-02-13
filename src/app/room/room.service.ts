import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Room } from './IRoom';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getRoom(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>('');
  }
}
