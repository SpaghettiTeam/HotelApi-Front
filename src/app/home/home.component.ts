import { Room } from './../room/IRoom';
import { RoomService } from './../room/room.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { Form } from '../form';
import { json } from 'body-parser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prices: string[] = ['30', '40', '50', '60'];
  formModel = new Form();
  constructor(private roomService: RoomService) { }

  data: Room[] = [];
  ngOnInit() {
  }

  getRoom() {
    return this.roomService.getRoom().subscribe(rooms => {
      this.data.push(rooms);
      console.log(this.data);
    });
  }

  getSingleRoom() {
    return this.roomService.getSingleRoom(1).subscribe(room => {
      console.log(room);
    });
  }



  onSubmit() {

    // const form = JSON.stringify(this.formModel);
    this.roomService.sendForm(this.formModel)
      .subscribe(
        data => {console.log('success', data);
      this.data = data},
        error => console.log('error', error)
      );
    console.log(this.formModel);
  }

}
