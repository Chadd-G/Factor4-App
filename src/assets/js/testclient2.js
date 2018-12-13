var soap = require('soap');

const url = 'https://trans.api.sparkbase.com/v4/transaction';
const wsdlUrl = 'https://trans.api.sparkbase.com/v4/transaction?wsdl';
var auth = "Basic " + new Buffer("loc958741" + ":" + "viv1234").toString("base64");



  soap.createClient(wsdlUrl, {endpoint: 'https://trans.api.sparkbase.com/v4/transaction'}, function (err, client) {
    client.addHttpHeader('Authorization', auth);
    console.log("error: ", err )

    client.SparkbaseTransactionWsdlImplService.SparkbaseTransactionWsdlPortPort.LoyaltyIssuance(
    {
      standardHeader: {
      requestId: "",
      systemId: "SB",
      clientId: "999",
      locationId: "958741",
      terminalId: "1",
      },
    account: {
      accountId: "952286474268787",
      pin: "617160",
      entryType: "K"
     },
     amount: {
      // programId: "43682",
       valueCode: "Points",
       enteredAmount: "100"
      
     }
    
  
   }, 
    function (err, result, rawResponse, soapHeader, rawRequest) {
        //console.log("error: ", err )
        //console.log("accounthistory: ", client.describe().SparkbaseTransactionWsdlImplService.SparkbaseTransactionWsdlPortPort.AccountHistory)
        console.log("RESULT: ",result);
         console.log("BALANCE: ",result.balances);
        
        // console.log("last request: ",client.lastRequest);
        // console.log("HEADERS: ",client.getHttpHeaders());
     
     }); 


    
  });

