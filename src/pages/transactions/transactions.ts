import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/data/provider';
import { TRANSITION_ID } from '@angular/platform-browser/src/browser/server-transition';
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

  transactionReport: any;
  transactions: string [];
  transactionData: string [];
  account: string;
  pin: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider) {

    this.account = navParams.get('account');
    this.pin = navParams.get('pin');
    console.log("account: ",this.account);
    console.log("pin: ", this.pin);

    this.provider.transactions(this.account, this.pin).then(response => {
      // data after proccessed.
        this.transactionReport = response.substring(120);
    
        this.transactions = this.transactionReport.split("\n", 15);
        var transactionsLength = this.transactions.length;
        for (var i = 0; i < transactionsLength; i++){
          //console.log("transactions: ", this.transactions[i]);
          this.transactionData = this.transactions[i].split(" ", 4);
         console.log("transactionData: ",this.transactionData);
          console.log("----------------------------------");
          console.log("transaction ID:", this.transactionData[0], "\nDate:", this.transactionData[1], "\nTime:", this.transactionData[2], "\nType:",
          this.transactionData[3], "\nAmount:", this.transactionData[4]);
        }
         console.log("transactions: ",this.transactions);
       }, err => console.log(err))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }

}
