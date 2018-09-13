var soap = require('soap');

const url = 'https://trans.api.sparkbase.com/v4/transaction';
const wsdlUrl = 'https://trans.api.sparkbase.com/v4/transaction?wsdl';
var auth = "Basic " + new Buffer("loc958741" + ":" + "viv1234").toString("base64");



  soap.createClient(wsdlUrl, {endpoint: 'https://trans.api.sparkbase.com/v4/transaction'}, function (err, client) {
    client.addHttpHeader('Authorization', auth);
    console.log("error: ", err )

    client.SparkbaseTransactionWsdlImplService.SparkbaseTransactionWsdlPortPort.Inquiry(
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
      pin: "617160"
     },
   }, 
    function (err, result, rawResponse, soapHeader, rawRequest) {
        //console.log("error: ", err )
        //console.log("client: ", client.describe());
         console.log("RESULT: ",result);
         console.log("BALANCE: ",result.balances.balance[0].amount," ",result.balances.balance[0].valueCode);
         console.log("XMLRESPONSE: ",rawResponse);
         console.log("HEADERS: ",client.getHttpHeaders());
     
     }); 


    
  });

