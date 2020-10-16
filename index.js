

function mockPayment() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "path" : "/v1/transfers",
            "method" : "POST",
            "body": {
                "type": "JSON",
                "json": {
                        "client": {
                          "document_type": "DNI",
                          "document_number": 29123456
                        },
                        "card": {
                          "encrypted_data": "1aaZDmTidYcdkV3XXagyuxiqM/YVGeyonBBy9QcAhNqYFhpFLAABTatos6KC/ChppKfDnpXBWHuhxUhp6QA0T0IEW5BikO2j6jA/2TjRGJZilnt6yoYrWoKpS9qa9422wFdp+HkZvbtrNcPrh3Es7Q=="
                        },
                        "terminal": {
                          "channel": 12,
                          "origin": 14,
                          "entity_name": "NOMBREENTIDADPEI",
                          "terminal_data": "nanananana",
                          "ip_address": "127.0.0.1",
                          "terminal_id": "437",
                          "zip_code": "B1611"
                        },
                        "transfer": {
                          "concept_code": "J",
                          "virtual_token": "",
                          "unique_banking_key": "1500054100030066595978",
                          "amount": 1,
                          "currency": "ARS",
                          "reference": "REFPEI"
                        },
                        "timestamp": "2020-10-16T16:36:16.349-03:00",
                        "trace_number": "319",
                        "transaction_number": "318"
                },
                "matchType": "STRICT"
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

function mockPayment2() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "path" : "/v1/transfers",
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

function mockSimple() {
    var mockServerClient =  require('mockserver-client').mockServerClient;

    mockServerClient("localhost", 1080).mockSimpleResponse('/simple', { name: 'simple' }, 203)
    .then(
        function(result) {
            // do something next
            console.log("expectation simple created");
        }, 
        function(error) {
            // handle error
            console.log(error);
        }
    );
}

function mockAnyResponse () {
    var mockServerClient =  require('mockserver-client').mockServerClient;

    mockServerClient("localhost", 1080).mockAnyResponse({
        "httpRequest": {
            "method": "POST",
            "path": "/any"
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "type": "STRING",
                "string": "Any response",
                "contentType": "text/plain; charset=utf-8"
            }
        }
    })
    .then(
        function(result) {
            // do something next
            console.log("expectation any created");
        }, 
        function(error) {
            // handle error
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

// mocks
//mockPayment();
mockPayment2();

//mockSimple();

//mockAnyResponse();

// reset, mocks, logs, trace

//reset();