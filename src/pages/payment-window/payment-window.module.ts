import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentWindowPage } from './payment-window';

@NgModule({
  declarations: [
    PaymentWindowPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentWindowPage),
  ],
})
export class PaymentWindowPageModule {}
