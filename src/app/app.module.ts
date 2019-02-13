import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app-routing.module';
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
import { RouterModule, ROUTES } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
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
    CallbackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
