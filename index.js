
function getToken() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "path" : "/v1/oauth/accesstoken",
            "method" : "GET",
            "headers": {
                "Authorization": [
                  "Basic l1k2jl3kj12l3kj12l3kj132lk==="
                ],
                "host": [
                  "localhost:1080"
                ],
                "accept": [
                  "*/*"
                ],
                "user-agent": [
                  "AHC/2.1"
                ],
                "content-length": [
                  "0"
                ]
              }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "token_type": "Bearer",
                "access_token": "6emVMD7kBH4rLh32iF2HX3yByZBd",
                "expires_in": "3599",
                "scope": ""
            }
        }
    }).then(
        function () {
            console.log("expectation token created");
        },
        function (error) {
            console.log(error);
        }
    );
}

function mockPayment() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "path" : "/v1/pei_card_not_present/transfers",
            "method" : "POST",
            "body": {
                "type": "JSON",
                "json": {
                        "client": {
                          "document_type": "DNI",
                          "document_number": 29123456
                        },
                        "terminal": {
                          "channel": 12,
                          "origin": 14,
                          "entity_name": "NOMBREENTIDADPEI",
                          "terminal_data": "nanananana",
                          "ip_address": "127.0.0.1",
                          "zip_code": "B1611"
                        }
                },
                "matchType": "ONLY_MATCHING_FIELDS"
            }
        },
        "httpResponse": {
            "statusCode": 201,
            "body": {
                "code" : "00",
                "description" : null,
                "transfer_date" : "2020-10-16T12:12:37.974-03:00[America/Argentina/Buenos_Aires]",
                "amount" : 1.0,
                "currency" : "ARS",
                "working_key" : null,
                "trace_number" : "308",
                "transaction_number" : "307"
            }
        }
    }).then(
        function () {
            console.log("expectation payment created");
        },
        function (error) {
            console.log(error);
        }
    );
}


function reset() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080)
    .reset()
    .then(
        function () {
            console.log("reset all state");
        },
        function (error) {
            console.log(error);
        }
    );
}


reset();

getToken();

mockPayment();