import { Component, OnInit } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prices: string[] = ['30', '40', '50', '60'];
  formModel = new Form('2019-02-08', '2019-02-09', '30', '30');
  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    console.log(this.formModel);
  }

}
