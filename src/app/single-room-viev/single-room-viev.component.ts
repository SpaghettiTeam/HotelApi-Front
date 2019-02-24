import { RoomService } from './../room/room.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleRoom } from '../room/ISingleRoomDescription';

@Component({
  selector: 'app-single-room-viev',
  templateUrl: './single-room-viev.component.html',
  styleUrls: ['./single-room-viev.component.css']
})
export class SingleRoomVievComponent implements OnInit {
  constructor(private route: ActivatedRoute, private roomService: RoomService) {
    this.singleRoom = new SingleRoom();
   }
  id: number;
  singleRoom: SingleRoom;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getSingleRoom(this.id).subscribe(singleRoom =>  {
      this.singleRoom = singleRoom
      console.log(singleRoom);
    }
      );

  }


}
