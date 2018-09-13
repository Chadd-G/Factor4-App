import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Provider } from '../../providers/data/provider';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Provider]
})

export class LoginPage {
 
  accountNumber: any;
  accountPin: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider) {
 
  }

  sendLoginInput(account, pin){
    account = this.accountNumber;
    pin = this.accountPin;
    this.navCtrl.push(AboutPage, {account, pin});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  

}