import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TransactionsPage } from '../transactions/transactions';
import { Provider } from '../../providers/data/provider';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [Provider]
})
  
export class AboutPage {
  valueCode: any;
  myBalance: any
  account: string;
  pin: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider) {
    
   this.account = navParams.get('account')
   this.pin = navParams.get('pin')
 
   this.provider.loadbalance().then(response => {
    // data after proccessed.
    this.myBalance = response;
    console.log("balance: ",this.myBalance);
     }, err => console.log(err))
  
  }

   paypage(){
    this.navCtrl.push(ContactPage);
   }
   addvalue(){
    this.navCtrl.push(HomePage);
   }

   transactionspage(){
    this.navCtrl.push(TransactionsPage);
   }

   logout(){
    this.navCtrl.push(WelcomePage);
   }

  ionViewDidLoad(balance){
   

    
   
  }

}
