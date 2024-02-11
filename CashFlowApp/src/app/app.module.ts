import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { AccountingYear } from './AccountingYear';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import * as jalaliMoment from 'jalali-moment';
import * as moment from 'moment';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker'; // Example for ng-persian-datepicker
import { ReactiveFormsModule } from '@angular/forms'; // Also required for ng-persian-datepicker
// moment.loadPersian({ usePersianDigits: true });
// jalaliMoment.loadPersian({ usePersianDigits: true });
import { DataTablesModule } from "angular-datatables";

moment.locale('fa');

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    AccountingYear
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgPersianDatepickerModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
