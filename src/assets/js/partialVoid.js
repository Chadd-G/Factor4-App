var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var url = " https://stagegw.transnox.com/servlets/TransNox_API_Server";

  xhr.open("POST", url, true);
  xhr.setRequestHeader("user-agent", "infonox");

   xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log("void response status: ", json.VoidResponse.status);
          

        }
    };


var data = JSON.stringify(
  { "Void": {
      "deviceID": "88800010475401",
      "transactionKey": "E3ZW6XXG2WWKNZ6OW1DBA0T7Y6N4UBI2",
      "transactionAmount": "5.00",
      "transactionID": "17490740",
      "developerID": "003112"
    }
  })
   xhr.send(data);