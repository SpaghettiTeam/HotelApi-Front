import { SingleRoom } from './../room/ISingleRoomDescription';
import { RoomService } from './../room/room.service';
import { Room } from './../room/IRoom';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-rooms',
  templateUrl: './list-of-rooms.component.html',
  styleUrls: ['./list-of-rooms.component.css']
})
export class ListOfRoomsComponent implements OnInit {

  constructor(private roomService: RoomService) { }



  @Input()
  listOfRooms: Room[] = [] ;

  image: any = 'https://unsplash.it/600/400';

  ngOnInit() {
  }




}