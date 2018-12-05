
import { IPlaceholder } from './../iplaceholder';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Dog} from '../app.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  posts: Array<IPlaceholder>;
  constructor(private http: HttpClient) {
    this.http.get<IPlaceholder[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts);
      });
  }


  ngOnInit() {
  }

}
