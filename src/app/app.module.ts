import { AuthService } from './auth0/auth0.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainVievComponent } from './main-viev/main-viev.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PriceListComponent } from './price-list/price-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RoomService } from './room/room.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { ListOfRoomsComponent } from './list-of-rooms/list-of-rooms.component';
import { SingleRoomVievComponent } from './single-room-viev/single-room-viev.component';


@NgModule({
  declarations: [
    AppComponent,
    MainVievComponent,
    HeaderComponent,
    ContactComponent,
    GalleryComponent,
    PriceListComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    CallbackComponent,
    ListOfRoomsComponent,
    SingleRoomVievComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  providers: [RoomService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
