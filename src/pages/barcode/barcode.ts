import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Provider } from '../../providers/data/provider';
import JsBarcode from 'jsbarcode';
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
  providers: [Provider]
})

export class BarcodePage {
  @ViewChild('barcode') barcode: ElementRef;
  
  account: any;
  pin: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider) {
    this.account = navParams.get('account')
    this.pin = navParams.get('pin')
    console.log("account: ",this.account);
    console.log("pin: ",this.pin);
   
  }
  ionViewDidLoad() {
    JsBarcode(this.barcode.nativeElement, this.account, {
      marginLeft: 19
    });
  }
  balancepage(){
    this.navCtrl.push(HomePage);
    }
    
}
