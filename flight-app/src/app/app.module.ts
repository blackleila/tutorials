import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';

import {HttpClientModule}from'@angular/common/http';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
//import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
//import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
//import {FlightCardComponent} from "./flight-booking/flight-card/flight-card.component";

import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    //FlightSearchComponent,
    //FlightCardComponent,
    HomeComponent,
    //PassengerSearchComponent,
    //FlightEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    FlightBookingModule
  ],
  providers: []
})
export class AppModule { }
