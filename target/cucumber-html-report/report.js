$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/placeValidations.feature");
formatter.feature({
  "name": "Validating Place API\u0027s",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if Place is being Succesfully added using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Addplace"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Add Place Payload with  \"\u003cname\u003e\"\"\u003clanguage\u003e\"\"\u003caddress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify place_Id created maps to \"\u003cname\u003e\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "language",
        "address"
      ]
    },
    {
      "cells": [
        "AAhouse",
        "English",
        "World cross centre"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if Place is being Succesfully added using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Addplace"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Add Place Payload with  \"AAhouse\"\"English\"\"World cross centre\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.StepDefination.add_Place_Payload_with(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.StepDefination.user_calls_with_http_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.StepDefination.the_API_call_got_success_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.StepDefination.in_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.StepDefination.in_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify place_Id created maps to \"AAhouse\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.StepDefination.verify_place_Id_created_maps_to_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});