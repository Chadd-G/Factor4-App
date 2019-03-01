import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/*
 * Generated class for the PaymentWindowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-window',
  templateUrl: 'payment-window.html',
})
export class PaymentWindowPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentWindowPage');
    
  }

}
