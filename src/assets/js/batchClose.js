var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    var url = "https://stagegw.transnox.com/servlets/TransNox_API_Server";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("user-agent", "infonox");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
             var json = JSON.parse(xhr.responseText);
          console.log("batch response: ", json.BatchCloseResponse);

            }
        };
        var data = JSON.stringify(
            { "BatchClose": {
                  "deviceID": "88800010475401",
                  "transactionKey": "E3ZW6XXG2WWKNZ6OW1DBA0T7Y6N4UBI2",
                  "operatingUserID": "003112G001",
                  "batchCloseParameter": {
                      "deviceID": "88800010475401"
                     }
                }});

            xhr.send(data);