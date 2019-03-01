var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var url = " https://stagegw.transnox.com/servlets/TransNox_API_Server";

  xhr.open("POST", url, true);
  xhr.setRequestHeader("user-agent", "infonox");

   xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log("amex authentication response status: ", json.CardAuthenticationResponse.status);
        }
    };


var data = JSON.stringify(
    {"CardAuthentication": {
        "deviceID": "88800010475401",
        "transactionKey": "E3ZW6XXG2WWKNZ6OW1DBA0T7Y6N4UBI2",
        "cardDataSource": "INTERNET",
        "cardNumber": "371449635392376",
        "expirationDate": "122020",
        "cvv2": "9997",
        "tokenRequired": "Y",
        "developerID": "003112"
    }
    })
   xhr.send(data);