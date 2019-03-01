/* @@@ This page isn't used anymore, user is redirected directly to iframed 
payment page to add value to their account. This page was a placeholder and 
is now redundant. @@@ */


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentWindowPage } from '../payment-window/payment-window'

@Component({
  selector: 'page-add-value',
  templateUrl: 'addvalue.html'
})



export class AddValuePage {
 
  
  

  constructor(public navCtrl: NavController) {
  
 

}
promptPaymentWindow() {
 
  this.navCtrl.push(PaymentWindowPage);
}
}