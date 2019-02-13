import { RoomService } from './../room/room.service';
import { Component, OnInit } from '@angular/core';
import { Form } from '../form';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prices: string[] = ['30', '40', '50', '60'];
  formModel = new Form();
  constructor(private roomService: RoomService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.roomService.sendForm(this.formModel)
    .subscribe(
      data => console.log('success', data),
      error => console.log('error', error)
    );
  }

}
