import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
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
    console.log("pin: ", pin)
    this.navCtrl.push(HomePage, {account, pin});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  

}