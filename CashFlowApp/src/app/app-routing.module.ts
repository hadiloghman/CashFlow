import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingYear } from './AccountingYear';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
    { path: '', component: AccountingYear },
    { path: 'payment/login', component: PaymentDetailsComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }