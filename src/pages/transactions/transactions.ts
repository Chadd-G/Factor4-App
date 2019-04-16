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
  transactions: Array<String> = [];
  transactionData: string [];
  account: string;
  pin: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: Provider) {

    this.account = navParams.get('account');
    this.pin = navParams.get('pin');

    this.provider.transactions(this.account, this.pin).then(response => {

        //transaction history data trimmed of all the preformatted text
        this.transactionReport = response.substring(120).split("\n",400);
        var transactionsLength = this.transactionReport.length;
  
        
        for (var i = 0; i < transactionsLength; i++){
          
          if (this.transactionReport[i].slice(16,18) == "GR"){
            this.transactions.push(this.transactionReport[i]);
          }
        } 
        console.log("transactions: ",this.transactions);
      }, 
      err => console.log(err))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }

}
