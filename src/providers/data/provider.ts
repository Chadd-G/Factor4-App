import { Injectable } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import 'rxjs/add/operator/map';
declare var require: any

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider {
  
   inquiryRequest ="<?xml version='1.0'?>"+
      "<soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:urn='urn:SparkbaseTransactionWsdl'>"+
        "<soap:Header/>"+
          "<soap:Body>"+
            "<urn:Inquiry>"+
              "<standardHeader>"+
                "<requestId>0</requestId>"+
                "<localeId/>"+
                "<systemId>SB</systemId>"+
                "<clientId>999</clientId>"+
                "<locationId>958741</locationId>"+
                "<terminalId>1</terminalId>"+
              "</standardHeader>"+
              "<account>"+
                "<accountId>952286474268787</accountId>"+
                "<pin>617160</pin>"+
              "</account>"+
          "</urn:Inquiry>"+
        "</soap:Body>"+
      "</soap:Envelope>"
    accountHistory = "<?xml version='1.0'?>"+
    "<soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:urn='urn:SparkbaseTransactionWsdl'>"+
      "<soap:Header/>"+
        "<soap:Body>"+
          "<urn:AccountHistory>"+
            "<standardHeader>"+
              "<requestId>0</requestId>"+
              "<localeId/>"+
              "<systemId>SB</systemId>"+
              "<clientId>999</clientId>"+
              "<locationId>958741</locationId>"+
              "<terminalId>1</terminalId>"+
            "</standardHeader>"+
            "<account>"+
              "<accountId>952286474268787</accountId>"+
              "<pin>617160</pin>"+
            "</account>"+
        "</urn:AccountHistory>"+
      "</soap:Body>"+
    "</soap:Envelope>"

    account = '';
    pin = '';
    parseString = require('xml2js').parseString;
    wsdlUrl = 'https://trans.api.sparkbase.com/v4/transaction?wsdl';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
  getAccountNumber(accountNumber){
    accountNumber = this.account;
  }
  getAccountPin(accountPin){
    accountPin = this.pin
  }
  loadbalance() {
    return fetch(this.wsdlUrl, {
    body: "<?xml version='1.0'?>"+
    "<soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:urn='urn:SparkbaseTransactionWsdl'>"+
      "<soap:Header/>"+
        "<soap:Body>"+
          "<urn:Inquiry>"+
            "<standardHeader>"+
              "<requestId>0</requestId>"+
              "<localeId/>"+
              "<systemId>SB</systemId>"+
              "<clientId>999</clientId>"+
              "<locationId>958741</locationId>"+
              "<terminalId>1</terminalId>"+
            "</standardHeader>"+
            "<account>"+
              "<accountId>"+this.account+"</accountId>"+
              "<pin>"+this.pin+"</pin>"+
            "</account>"+
        "</urn:Inquiry>"+
      "</soap:Body>"+
    "</soap:Envelope>",
    method: 'POST',
    headers: new Headers({
      'Authorization': 'Basic '+btoa('loc958741:viv1234')
        }), 
    credentials: 'include'
      })
        .then((response) => response.text())
        .then((balance) => { 
            this.parseString(balance, function (error, result){
        //console.log("error: ",error)
            balance = result['soap:Envelope']['soap:Body'][0]['ns2:InquiryResponse'][0]['balances'][0]['balance'][0]['amount'].toString();
         
          })
     
       return balance;
     
      })
    };
  transactions(){
    return fetch(this.wsdlUrl, {
      body: this.accountHistory,
      method: 'POST',
      headers: new Headers({
        'Authorization': 'Basic '+btoa('loc958741:viv1234')
          }), 
      credentials: 'include'
        })
          .then((response) => response.text())
          .then((transactions) => { 
              this.parseString(transactions, function (error, result){
          //console.log("error: ",error)
              transactions = result['soap:Envelope']['soap:Body'][0]['ns2:AccountHistoryResponse'][0].printableData.toString();
       
            })
       
         return transactions;
       
        })
    }
 
}
