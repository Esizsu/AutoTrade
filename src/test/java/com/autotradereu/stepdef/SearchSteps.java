package com.autotradereu.stepdef;

import com.autotradereu.pages.SearchPage;
import com.autotradereu.utils.ConfigurationReader;
import com.autotradereu.utils.MyDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class SearchSteps {

    Logger logger = LoggerFactory.getLogger(SearchSteps.class);
    SearchPage searchPage = new SearchPage();



    @Given("User test with {string} browser")

    public void userTestWithBrowser(String brs) {
        if(brs.equals("chrome")){
           // ConfigurationReader.getProperty("browser"); ya bunu
            System.setProperty("browser","chrome");   // yada bunu yaptiririz

            /*bu methodu Cross Browser testing yapabilmek icin olusturduk.
     2 sekilde Cross Browser testing yapabiliriz.
     1-bu sekilde methodumuzu olusturup set.property ile,
     2- yada Mydriver classimizdaki browserlar degerlerinden hangisini istiyorsak(chrome, firefox etc.
      birini ConfigurationReader de  browserimiza gondeririz. ozman bu methoda ihtiyac yok.
      ConfigurationReader dan yapamak saglikli bir yontem
     */
        }
    }

    @Given("User is on homepage")
    public void userIsOnHomepage() {
        MyDriver.get().manage().deleteAllCookies(); //cookileri silmek icin
        MyDriver.get().navigate().refresh();
        MyDriver.get().get(ConfigurationReader.getProperty("baseurl"));
        String expected = "Used and New Car Sales, Review - Autotrader";
        String actual = MyDriver.get().getTitle();
        Assert.assertEquals(expected, actual);
        logger.info("Assertion successful");
    }

    @Then("Verify that {string} is present")
    public void verifyThatIsPresent(String value) {
        searchPage.verifytheFields(value);
    }

    @And("Verify that Search button is present")
    public void verifyThatSearchButtonIsPresent() {
        searchPage.verifySerchButton();

    }

    @Then("Verify that Any {string} and Any {string} are present")
    public void verifyThatAnyAndAnyArePresent(String make, String model) {
        searchPage.verifyAnyMakeAnyModel(make, model);

    }



}

