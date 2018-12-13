import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Provider } from '../../providers/data/provider';
import JsBarcode from 'jsbarcode';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [Provider]
})

export class ContactPage {
  @ViewChild('barcode') barcode: ElementRef;
  
  account: string;
  pin: string;
  barcodeNumber: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider) {
    this.account = navParams.get('account')
    this.pin = navParams.get('pin')
    console.log("account: ",this.account);
    console.log("pin: ",this.pin);
   
  }
  ionViewDidLoad() {
    JsBarcode(this.barcode.nativeElement, this.account, {
      marginLeft: 28
    });
  }
  balancepage(){
    this.navCtrl.push(AboutPage);
    }
    
}
