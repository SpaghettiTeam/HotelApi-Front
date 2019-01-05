import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService, public service: HttpService) {
    auth.handleAuthentication();
    this.getPosts();
    this.getPostByUserId();
    // this.getHellop();

  }
  getPostByUserId() {
    this.service.getPostByUserId('2019-12-01', '2019-12-10').subscribe(rooms => {
      console.log(rooms);
    });
  }
  getHellop() {
this.service.getHellop().subscribe(s => {
  console.log(s);
});

  }
  getPosts() {
    this.service.getPostJson().subscribe(posts => {
      console.log(posts);
    });
  }





  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewSession();
    }
  }

}




