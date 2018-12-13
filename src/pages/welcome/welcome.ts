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
/*    
     fetch('https://stagegw.transnox.com/servlets/TransNox_API_Server', {
      body:"{'Sale': {"+
      "'deviceID': '88800010475401',"+
      "'transactionKey': 'E3ZW6XXG2WWKNZ6OW1DBA0T7Y6N4UBI2',"+
      "'cardDataSource': 'INTERNET',"+
      "'transactionAmount': '1.00',"+
      "'cardNumber': '4012000098765439',"+
      "'expirationDate': '12/20',"+
      "'cvv2': '999'"+
  "})",
      method: 'POST'}).then((response) => response.text).then((myResponse) => {
          console.log(myResponse);
      })  */
    }

  login(){
    this.navCtrl.push(LoginPage);

    }
} //class close
 
  
 


