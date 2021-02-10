$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/search.feature");
formatter.feature({
  "name": "Verifying the search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.background({
  "name": "Browser testing",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User test with \"firefox\" browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.autotradereu.stepdef.SearchSteps.userTestWithBrowser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Homepage verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_test"
    },
    {
      "name": "@smoke_test,"
    },
    {
      "name": "@unit_test"
    }
  ]
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.autotradereu.stepdef.SearchSteps.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Browse by Make\" is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.SearchSteps.verifyThatIsPresent(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64006}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4f16f8e0da5c7515ba81684e0c3d8b11\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.autotradereu.pages.SearchPage.verifytheFields(SearchPage.java:51)\r\n\tat com.autotradereu.stepdef.SearchSteps.verifyThatIsPresent(SearchSteps.java:47)\r\n\tat ✽.Verify that \"Browse by Make\" is present(file:///C:/Users/tsume/IntelliJ%20Workplace/The%20Last%20Framework%20project%20MG/AutoTradeEu/src/test/resources/features/search.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify that \"Browse by Style\" is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.SearchSteps.verifyThatIsPresent(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"Advance search\" is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.SearchSteps.verifyThatIsPresent(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Search button is present",
  "keyword": "And "
});
formatter.match({
  "location": "com.autotradereu.stepdef.SearchSteps.verifyThatSearchButtonIsPresent()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Any \"Make\" and Any \"Model\" are present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.SearchSteps.verifyThatAnyAndAnyArePresent(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Browser testing",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User test with \"firefox\" browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.autotradereu.stepdef.SearchSteps.userTestWithBrowser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User checks the Advance Search link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_test"
    },
    {
      "name": "@smoke_test,"
    },
    {
      "name": "@unit_test"
    }
  ]
});
formatter.step({
  "name": "User is on Advance Search homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userIsOnAdvanceSearchHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"30004\" in the zip code text box",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userEnterInTheZipCodeTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the \"Certified\" check box under \"Condition\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectTheCheckBoxUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the \"Convertible\" check box under \"Style\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectTheCheckBoxUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Update the year from \"2017\" to \"2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userUpdateTheYearFromTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"null\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\r\n\tat com.autotradereu.pages.AdvanceSearchPage.modelYears(AdvanceSearchPage.java:73)\r\n\tat com.autotradereu.stepdef.AdvanceSearchSteps.userUpdateTheYearFromTo(AdvanceSearchSteps.java:43)\r\n\tat ✽.User Update the year from \"2017\" to \"2020\"(file:///C:/Users/tsume/IntelliJ%20Workplace/The%20Last%20Framework%20project%20MG/AutoTradeEu/src/test/resources/features/search.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User select Make as \"BMW\" under Make, Model \u0026 Trim section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectMakeAsUnderMakeModelTrimSection(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userClicksSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies that he is in result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userVerifiesThatHeIsInResultPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies that he sees only \"BMW\" cars in the result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userVerifiesThatHeSeesOnlyCarsInTheResultPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Display in console the total number of cars in the results page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.displayInConsoleTheTotalNumberOfCarsListingsInTheResultsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64133}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2631f9802b209969814e3226b89919c1\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.autotradereu.stepdef.Hooks.after(Hooks.java:37)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/search1.feature");
formatter.feature({
  "name": "Verifying the search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User checks the Advance Search link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@unit_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Advance Search homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userIsOnAdvanceSearchHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"30004\" in the zip code text box",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userEnterInTheZipCodeTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the \"Certified\" check box under \"Condition\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectTheCheckBoxUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the \"Convertible\" check box under \"Style\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectTheCheckBoxUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Update the year from \"2017\" to \"2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userUpdateTheYearFromTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Make as \"BMW\" under Make, Model \u0026 Trim section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectMakeAsUnderMakeModelTrimSection(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userClicksSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that he is in result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userVerifiesThatHeIsInResultPage()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Certified BMW Convertibles for Sale in Alpharetta, GA (with Photos) - Autotrader]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.autotradereu.stepdef.AdvanceSearchSteps.userVerifiesThatHeIsInResultPage(AdvanceSearchSteps.java:67)\r\n\tat ✽.User verifies that he is in result page(file:///C:/Users/tsume/IntelliJ%20Workplace/The%20Last%20Framework%20project%20MG/AutoTradeEu/src/test/resources/features/search1.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User verifies that he sees only \"BMW\" cars in the result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userVerifiesThatHeSeesOnlyCarsInTheResultPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Display in console the total number of cars in the results page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.displayInConsoleTheTotalNumberOfCarsListingsInTheResultsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64009}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ac5ceff3b554be610bc8155021f5b451\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.autotradereu.stepdef.Hooks.after(Hooks.java:37)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/search2.feature");
formatter.feature({
  "name": "Verifying the search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User checks the Advance Search link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_test,"
    },
    {
      "name": "@unit_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Advance Search homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userIsOnAdvanceSearchHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"30004\" in the zip code text box",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userEnterInTheZipCodeTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the \"Certified\" check box under \"Condition\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectTheCheckBoxUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the \"Convertible\" check box under \"Style\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectTheCheckBoxUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Update the year from \"2017\" to \"2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userUpdateTheYearFromTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Make as \"BMW\" under Make, Model \u0026 Trim section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userSelectMakeAsUnderMakeModelTrimSection(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Search button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userClicksSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that he is in result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userVerifiesThatHeIsInResultPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64005}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1cddefd56b64b84d67fd979692041103\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat com.autotradereu.stepdef.AdvanceSearchSteps.userVerifiesThatHeIsInResultPage(AdvanceSearchSteps.java:66)\r\n\tat ✽.User verifies that he is in result page(file:///C:/Users/tsume/IntelliJ%20Workplace/The%20Last%20Framework%20project%20MG/AutoTradeEu/src/test/resources/features/search2.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User verifies that he sees only \"BMW\" cars in the result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.userVerifiesThatHeSeesOnlyCarsInTheResultPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Display in console the total number of cars in the results page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.autotradereu.stepdef.AdvanceSearchSteps.displayInConsoleTheTotalNumberOfCarsListingsInTheResultsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64005}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1cddefd56b64b84d67fd979692041103\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.autotradereu.stepdef.Hooks.after(Hooks.java:37)\r\n",
  "status": "failed"
});
});