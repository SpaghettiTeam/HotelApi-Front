import { IPlaceholder } from './iplaceholder';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IRoom} from './IRoom';


@Injectable({
  providedIn: 'root'

})
export class HttpService {

  constructor(private http: HttpClient) { }

getHellop() {
  const header = {
    'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Origin, Methods, Content-Type'
  };
return this.http.get('https://hotelapi-backend.herokuapp.com/api', {headers : header});
}

getPostByUserId(startDate: string, endDate: string) {
  const post = {
    'startDate': startDate,
    'endDate': endDate
  };

  const header = {

    'Authorization': 'abb',
    ' Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Credential': 'true',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',

    'Access-Control-Allow-Headers': 'Authorization'

  };
  return this.http.post<Array<IRoom>>('https://hotelapi-backend.herokuapp.com/api/find_rooms', post , {headers : header});
  }

  getPostJson() {
    return this.http.get<Array<IPlaceholder[]>>('https://jsonplaceholder.typicode.com/posts');
  }

}
