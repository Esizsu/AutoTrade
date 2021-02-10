package com.autotradereu.stepdef;

import com.autotradereu.pages.AdvanceSearchPage;
import com.autotradereu.pages.Base;
import com.autotradereu.utils.ConfigurationReader;
import com.autotradereu.utils.MyDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class AdvanceSearchSteps extends Base {

    Logger logger = LoggerFactory.getLogger(AdvanceSearchSteps.class);
    AdvanceSearchPage advanceSearchPage = new AdvanceSearchPage();

    @Given("User is on Advance Search homepage")
    public void userIsOnAdvanceSearchHomepage() {
        // burada advance search'e homepageden click yapip gecis yapacaktik ama cookilerden dolayi acilmadigi icin
        //direct advance search pageden basladik. asagidakileri de o yzden yazdik
        MyDriver.get().get(ConfigurationReader.getProperty("advanceUrl"));
        String expectedTitle = "Search for Cars For Sale Online - Find a Car at Autotrader";
        String actualTitle = MyDriver.get().getTitle();
        Assert.assertEquals(expectedTitle,actualTitle);
        logger.info("Advance Search Assertion is successful");
    }
    @Then("User enter {string} in the zip code text box")
    public void userEnterInTheZipCodeTextBox(String zipCode) {
        advanceSearchPage.zipCode(zipCode);
        logger.info("zipcode entered as 30004 SUCCESFULLY!!");
    }

    @Then("User select the {string} check box under {string}")
    public void userSelectTheCheckBoxUnder(String checkBox, String x) {
        advanceSearchPage.selectCheckBox(checkBox);

    }

    @Then("User Update the year from {string} to {string}")
    public void userUpdateTheYearFromTo(String startYears, String endYears ) {
        advanceSearchPage.modelYears(startYears, endYears);
    }

    @Then("User select Make as {string} under Make, Model & Trim section")
    public void userSelectMakeAsUnderMakeModelTrimSection(String model) {
        advanceSearchPage.chooseModel(model);

    }

    @Then("User clicks Search button")
    public void userClicksSearchButton() {
        advanceSearchPage.clickSearchButton();
    }

    @Then("User verifies that he is in result page")
    public void userVerifiesThatHeIsInResultPage() {
        //Assertion da unexpected hatasi yani, result page'deki title'i alamadigi icin hata verdi.
        // o yuzden wait koyduk. implicity or base classimizdaki waitSomeTime methodumuz.

       // MyDriver.get().manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        waitSomeTime(9000L);
        String expected = "Certified BMW Convertibles for Sale in Alpharetta, GA (with Photos) - Autotrader";
//    String actual = "Certified BMW Convertibles for Sale in Alpharetta, GA (with Photos) - Autotrader";
        String actual = MyDriver.get().getTitle();
        Assert.assertEquals(expected, actual);

    }

    @Then("User verifies that he sees only {string} cars in the result page")
    public void userVerifiesThatHeSeesOnlyCarsInTheResultPage(String model) {
        advanceSearchPage.numberOfListingCount(model);
    }

    @Then("Display in console the total number of cars in the results page")
    public void displayInConsoleTheTotalNumberOfCarsListingsInTheResultsPage() {
    }


}
