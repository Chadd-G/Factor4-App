import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/data/provider';
/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
  providers: [Provider]
})
export class TransactionsPage {

  myTransactions: any
  account: string;
  pin: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider) {

    this.account = navParams.get('account');
    this.pin = navParams.get('pin');
    console.log("account: ",this.account);
    console.log("pin: ", this.pin);

    this.provider.transactions(this.account, this.pin).then(response => {
      // data after proccessed.
        this.myTransactions = response;
         console.log("transactions: ",response);
       }, err => console.log(err))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }

}
