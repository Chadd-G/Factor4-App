var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    var url = "https://gateway.transit-pass.com/servlets/TransNox_API_Server";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("user-agent", "infonox");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
             var json = JSON.parse(xhr.responseText);
          console.log("Transaction Key: ", json.GenerateKeyResponse);

            }
            else{
                console.log(xhr.responseText);
            }
        };
        var data = JSON.stringify(
            { "GenerateKey": {
                  "mid": "555880172500",
                  "userID": "TA675197",
                  "password": "Factor4cert$1"
                  
                }});

                xhr.send(data);