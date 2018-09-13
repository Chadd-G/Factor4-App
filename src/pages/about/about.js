var soap = require('soap');
var express = require('express');
//var cors = require('cors');
var app = express();
  var url = 'https://trans.api.sparkbase.com/v4/transaction?wsdl';
  var auth = "Basic " + new Buffer("loc958741" + ":" + "viv1234").toString("base64");
  var wsdlOptions = {
    "overrideRootElement": {
      "namespace": "urn",
      "xmlnsAttributes": [{ "name": "xmlns:urn", "value": "urn:SparkbaseTransactionWsdl" },
                          { "name": "xmlns:soapenv", "value": "http://schemas.xmlsoap.org/soap/envelope/" },
                          { "name": "xmlns:soap", "value": "http://www.w3.org/2003/05/soap-envelope" }
                         ],
     
    }
  };
  var myMessage =  
  
    '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:urn="urn:SparkbaseTransactionWsdl">'+
    "<soapenv:Header/>"+
      "<soapenv:Body>"+
 

      "<urn:Inquiry>"+
        "<standardHeader>"+
          "<requestId>1</requestId>"+
           "<systemId>SB</systemId>"+
           "<clientId>999</clientId>"+
           "<locationId>958741</locationId>"+
           "<terminalId>1</terminalId>"+  
          // "<initiatorType>U</initiatorType>"+ 
          // "<initiatorId>1000</initiatorId>"+ 
           //"<initiatorPassword>2000</initiatorPassword>"+        
        "</standardHeader>"+
        "<account>"+
        "<programId></programId>"+
             "<accountId>952286474268787</accountId>"+ 
             "<pin>617160</pin>"+ 
             "<entryType>K</entryType>"+ 
        "</account>"+
    
        "<questionsAndAnswers>"+
       
        "</questionsAndAnswers>"+
      "</urn:Inquiry>"+
    "</soapenv:Body>"+
  "</soapenv:Envelope>";

  
     /* client.describe() // returns
     { SparkbaseTransactionWsdlImplService: 
      { SparkbaseTransactionWsdlPortPort: {
        AccountHistory: {
             input: {
               name: 'tns:AccountHistory'
             }
           }
         }
       }
     } */
                


  soap.createClient(url, wsdlOptions, function(err, client) {
    
    client.setSecurity(new soap.BasicAuthSecurity('loc958741', 'viv1234'));
    
    client.Inquiry(myMessage, function(err, result, rawResponse, soapHeader, rawRequest) {
      
        console.log("\n");
        console.log("\n");
        console.log("response: ", rawResponse);
        console.log("describe: ", client.describe());
        
       // console.log("describe: ", client.describe().SparkbaseTransactionWsdlImplService.SparkbaseTransactionWsdlPortPort.Inquiry);
        
      
     
        
    });
   
});

 