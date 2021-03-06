import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
declare var require: any;

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//export const API_ENDPOINT= '/api';
@Injectable()
export class Provider {
  
    parseString = require('xml2js').parseString;
    wsdlUrl = 'https://trans.api.sparkbase.com/v4/transaction?wsdl';
   
  constructor() {}
 

  login(account, pin){
    return fetch(this.wsdlUrl, {
      body: "<?xml version='1.0'?>"+
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
                "<accountId>"+account+"</accountId>"+
                "<pin>"+pin+"</pin>"+
              "</account>"+
          "</urn:AccountHistory>"+
        "</soap:Body>"+
      "</soap:Envelope>",
      method: 'POST',
      headers: new Headers({
        'Authorization': 'Basic '+btoa('loc958741:viv1234')
          }), 
      credentials: 'include'
        })
        .then((response) => response.text())
        .then((loginStatus) => {
          this.parseString(loginStatus, 
            function (error, result){
                  loginStatus = result['soap:Envelope']['soap:Body'][0]['ns2:AccountHistoryResponse'][0]['standardHeader'][0].status.toString();
                  
                });

          return loginStatus;
         });
  };

  loadbalance(account, pin) {
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
              "<accountId>"+account+"</accountId>"+
              "<pin>"+pin+"</pin>"+
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
            var status = result['soap:Envelope']['soap:Body'][0]['ns2:InquiryResponse'][0]['standardHeader'][0].status.toString();
            
            if(status == 'A'){
              balance = result['soap:Envelope']['soap:Body'][0]['ns2:InquiryResponse'][0]['balances'][0].balance[0].amount.toString();
           }
             else if (status == "E"){
              var briefMessage = result['soap:Envelope']['soap:Body'][0]['ns2:InquiryResponse'][0]['errorMessage'][0].briefMessage.toString();
              var inDepthmessage = result['soap:Envelope']['soap:Body'][0]['ns2:InquiryResponse'][0]['errorMessage'][0].inDepthMessage.toString();
              balance = briefMessage+ " - "+inDepthmessage;
            } 
           
          })
     
       return balance;
        
      })
    };

  transactions(account, pin){
    var d = new Date();
    var currentDate = d.getDate();
    var currentDatePadded = "".concat(currentDate < 10 ? '0' + ""+currentDate : ""+currentDate);
    var currentMonth = d.getMonth() + 1;
    var currentMonthPadded = "".concat(currentMonth < 10 ? '0' + ""+currentMonth : ""+currentMonth);
    var currentYear = d.getFullYear();
    var dateFormat = "".concat(currentYear+""+currentMonthPadded+""+currentDatePadded);
    var firstOfMonth = "".concat(currentYear+""+currentMonthPadded+""+"01");
    //var currentDate = "".concat(d.getFullYear()+""+d.getMonth()+1+""+d.getDate());
    return fetch(this.wsdlUrl, {
      body: "<?xml version='1.0'?>"+
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
                "<accountId>"+account+"</accountId>"+
                "<pin>"+pin+"</pin>"+
                "<entryType>K</entryType>"+
              "</account>"+
             "<report>"+
                "<type>D</type>"+
                "<minimumDate>"+firstOfMonth+"</minimumDate>"+ //Beginning of Month
                "<maximumDate>"+dateFormat+"</maximumDate>"+ //DateTime Now
                "<maxRecords>400</maxRecords>"+
              "</report>"+ 
          "</urn:AccountHistory>"+
        "</soap:Body>"+
      "</soap:Envelope>",
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
               console.log("result: ", result);
               console.log("current date: ",dateFormat);
               console.log("starting date: ",firstOfMonth);
            })
       
         return transactions;
       
        })
    }

  loadBarcode(account, pin){
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
                          "<accountId>"+account+"</accountId>"+
                          "<pin>"+pin+"</pin>"+
                        "</account>"+
                      "</urn:Inquiry>"+
                    "</soap:Body>"+
                "</soap:Envelope>",
              method: 'POST',
              headers: new Headers({
                  'Authorization': 'Basic '+ btoa('loc958741:viv1234')
                }), 
              credentials: 'include'
          }).then((response) => response.text())
              .then((barcode) => { 
                this.parseString(barcode, function (error, result){
                  barcode = result//['soap:Envelope']['soap:Body'][0] <--- (account component => accountID)
                  console.log("result: ", result);
                })
               return barcode;
            })
    }

  setGiftCredentials(account, pin){
      var url ='https://www.factor4payment.com/php/setGiftCredentials.php'; //production: https://www.factor4payment.com/php/setGiftCredentials.php
      var data = { 'accountId': account, 'pin': pin};
        return fetch(url, {
            method: 'POST',   
            body: JSON.stringify(data),
            credentials: 'include'

          }).then((res) => res.json())
            .then((response) => {
                console.log('accountID JSON:', response.accountId);
                console.log('pin JSON:', response.pin);
              return response;
        })
        .catch(error => console.log('Error:', error.message));
    }
}
