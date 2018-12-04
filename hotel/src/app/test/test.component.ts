
import { IPlaceholder } from './../iplaceholder';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // constructor(private http: HttpClient) {
  //   // Make the HTTP request:
  //   this.http.get('https://jsonplaceholder.typicode.com/todos/20')
  //   .subscribe(data => {
  //     console.log(data);
  //    });
  // }
  constructor(private http: HttpClient) {
    // Make the HTTP request:
    const x = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    IPlaceholder z = new IPlaceholder();

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    Observable<IPlaceholder> p =  this.http.post('https://jsonplaceholder.typicode.com/posts', x, options);
    // .subscribe(data => {
    //   console.log(data);
    //  });
  }


  ngOnInit() {
  }

}
