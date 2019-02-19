import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PriceListComponent } from './price-list/price-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { ListOfRoomsComponent } from './list-of-rooms/list-of-rooms.component';

const routes: Routes = [
{
  path: 'price-list',
  component: PriceListComponent
},
{
  path: 'gallery',
  component: GalleryComponent
},
{
 path: 'contact',
 component: ContactComponent
},
{
 path: 'home',
 component: HomeComponent
},
{
  path: 'profile',
  component: ProfileComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'callback',
  component: CallbackComponent
},
{
  path: 'rooms',
  component: ListOfRoomsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {



}
