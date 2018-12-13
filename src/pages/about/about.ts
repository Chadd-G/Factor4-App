import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TransactionsPage } from '../transactions/transactions';
import { Provider } from '../../providers/data/provider';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [Provider]
})
  
export class AboutPage {
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
      marginLeft: 28
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
    this.navCtrl.push(ContactPage, {account,pin});
    }
   addvalue(){
    this.navCtrl.push(HomePage);
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
