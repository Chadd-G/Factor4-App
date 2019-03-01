import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { BarcodePage } from '../barcode/barcode';
import { AddValuePage } from '../add-value/addvalue';
import { PaymentWindowPage } from '../payment-window/payment-window' 
import { TransactionsPage } from '../transactions/transactions';
import { Provider } from '../../providers/data/provider';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Provider]
})
  
export class HomePage {
  @ViewChild('barcode') barcode: ElementRef;
  myBalance: any
  account: string;
  pin: string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider) {
    this.account = navParams.get('account');
    this.pin = navParams.get('pin')
    this.provider.loadbalance(this.account, this.pin).then(response => {
      
       this.myBalance = "$ "+ response;
       console.log("balance: ",response);
     }, err => console.log(err)/*{this.myBalance = "error"}*/)
     
  
  }
  ionViewDidLoad(){
    JsBarcode(this.barcode.nativeElement, this.account, {
      marginLeft: 40
    });
   }
   ionViewWillEnter() {
    this.provider.loadbalance(this.account, this.pin).then(response => {
      
      this.myBalance = "$ "+ response;
      console.log("balance: ",response);
    }, err => console.log(err)/*{this.myBalance = "error"}*/)
  }
   paypage(account, pin){
     account = this.account
     pin = this.pin
    this.navCtrl.push(BarcodePage, {account,pin});
    }
   addvalue(){
    this.navCtrl.push(PaymentWindowPage);
    }

   transactionspage(account, pin){
     account = this.account;
     pin = this.pin;
    
    this.navCtrl.push(TransactionsPage, {account, pin});
   
   }

   logout(){
    this.navCtrl.push(WelcomePage);
   }

 

}
