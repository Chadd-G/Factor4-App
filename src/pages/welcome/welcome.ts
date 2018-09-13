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
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider ) { 
   
  
    }

  login(){
    this.navCtrl.push(LoginPage);

    }
} //class close
 
  
 


