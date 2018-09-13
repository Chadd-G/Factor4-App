import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Provider } from '../../providers/data/provider';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers: [Provider]
})

export class WelcomePage {
  balance: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider ) { 

     /*  this.provider.loadbalance().then(response => {
      // data after proccessed.
      this.balance = response;
      console.log("balance: ",this.balance);
       }, err => console.log(err));
     */
    }

  login(){
    this.navCtrl.push(LoginPage);

    }
} //class close
 
  
 


