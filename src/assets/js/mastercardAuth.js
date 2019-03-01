var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var url = " https://stagegw.transnox.com/servlets/TransNox_API_Server";

  xhr.open("POST", url, true);
  xhr.setRequestHeader("user-agent", "infonox");

   xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log("mastercard authentication response status: ", json.CardAuthenticationResponse);
        }
    };


var data = JSON.stringify(
    {"CardAuthentication": {
        "deviceID": "88800010475401",
        "transactionKey": "E3ZW6XXG2WWKNZ6OW1DBA0T7Y6N4UBI2",
        "cardDataSource": "INTERNET",
        "cardNumber": "5146315000000055",
        "expirationDate": "122020",
        "cvv2": "990",
        "addressLine1": "8320",
		    "zip": "85284",
        "tokenRequired": "Y",
        "developerID": "003112"
    }
    })
   xhr.send(data);