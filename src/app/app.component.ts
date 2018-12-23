import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  inputText = 'tekst';
  maxLenght = 5;
  colorClass = 'color';

  change() {
    this.inputText = ' zmiana tekstu';
    this.maxLenght = 10;
    this.colorClass = 'color2';
  }




  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewSession();
    }
  }

}




