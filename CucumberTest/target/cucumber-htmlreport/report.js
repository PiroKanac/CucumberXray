$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testcases/LoginTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "CLONE - Cucumber: Test Contact Form1",
  "description": "",
  "id": ";clone---cucumber:-test-contact-form1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@XRAYT-126"
    },
    {
      "line": 4,
      "name": "@XRAYT-134"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_login_page()"
});
formatter.result({
  "duration": 11563493978,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_username()"
});
formatter.result({
  "duration": 265875675,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_password()"
});
formatter.result({
  "duration": 228459774,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2727138832,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_logged_in_successfully()"
});
formatter.result({
  "duration": 27535012,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CLONE - Cucumber: Test Contact Form2",
  "description": "",
  "id": ";clone---cucumber:-test-contact-form2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@XRAYT-133"
    },
    {
      "line": 14,
      "name": "@XRAYT-134"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters incorrect username",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should not be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_login_page()"
});
formatter.result({
  "duration": 8575847912,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_incorrect_username()"
});
formatter.result({
  "duration": 374894925,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_password()"
});
formatter.result({
  "duration": 242158769,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2989196915,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_not_be_logged_in_successfully()"
});
formatter.result({
  "duration": 36074433,
  "status": "passed"
});
});