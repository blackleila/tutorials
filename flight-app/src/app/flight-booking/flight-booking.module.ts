import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent }
  from './flight-search/flight-search.component';
import { FlightCardComponent }
  from './flight-card/flight-card.component';
import { PassengerSearchComponent }
  from './passenger-search/passenger-search.component';
import { FlightEditComponent }
  from './flight-edit/flight-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';

@NgModule({
  imports: [
    CommonModule,

    // Important: Routes are referenced with **forChild**
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),

    // Dont't forget this if you want to work with Forms
    FormsModule,
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
  ],
})
export class FlightBookingModule { }
