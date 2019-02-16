import { AuthService } from './../auth0/auth0.service';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
   }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    }
  }




}
