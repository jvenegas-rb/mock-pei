
function getToken() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "path" : "/v1/oauth/accesstoken",
            "method" : "GET",
            "headers": {
                "Authorization": [
                  "Basic SnM0cWNqR0F2aHZ5b2R5aWhHQjV2N3ZPVk5oY0c4eHk6aVlFajVOaHNEbVhpbUVSZw=="
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
                "type": "JSON",
                "json": {
                    "token_type": "Bearer",
                    "access_token": "6emVMD7kBH4rLh32iF2HX3yByZBd",
                    "expires_in": "3599",
                    "scope": ""
                },
                "matchType": "ONLY_MATCHING_FIELDS"
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
                "transfer_date" : "2020-10-19T12:12:37.974-03:00[America/Argentina/Buenos_Aires]",
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

function mockAnnulments() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "path" : "/v1/pei_card_not_present/annulments",
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
                        "ip_address":"127.0.0.1",
                        "zip_code":"B1611"
                    },
                },
                "matchType": "ONLY_MATCHING_FIELDS"
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "code" : "00",
                "description" : null,
                "transfer_date" : "2020-10-16T12:12:37.974-03:00[America/Argentina/Buenos_Aires]",
                "amount" : 1.0,
                "currency" : "ARS",
                "working_key" : null,
                "trace_number" : "757328",
                "transaction_number" : "562653"
            }
        }
    }).then(
        function () {
            console.log("expectation annulment created");
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

mockAnnulments();