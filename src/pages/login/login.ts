import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Provider } from '../../providers/data/provider';
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Provider]
})

export class LoginPage {
 
  accountNumber: number;
  accountPin: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider, public alertController: AlertController) {
 
  }
 
  async loginAlert(){
    const alert = await this.alertController.create({
      title: 'Invalid Credentials',
      subTitle: 'The Card Number or Pin entered does not match an existing account. Please try again.',
      buttons: ['Ok']
    });
    await alert.present();
  }

  sendLoginInput(account, pin){
    account = this.accountNumber;
    pin = this.accountPin;
    this.provider.login(account, pin)
    .then(response => {
      if (response == 'A'){
          this.navCtrl.push(HomePage, {account, pin});
          console.log("login status: ",response);
        }
        else if (response == 'E'){
            this.loginAlert();
        }
    },err => console.log("login error: ",err))
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  

}