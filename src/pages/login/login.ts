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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  balance(account, pin){
    account = account || '0'
    pin = pin
    this.navCtrl.push(AboutPage, {account, pin});
  }

}