package com.autotradereu.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SearchPage extends Base {
    Logger logger = LoggerFactory.getLogger(SearchPage.class);

    /*
     Given User is on homepage
    Then Verify that "Browse by Make" is present
    Then Verify that "Browse by Style" is present
    Then Verify that "Advance search" is present
    And Verify that Search button is present
    Then Verify that "Make" and Any "Model" are present
     */

    @FindBy(xpath = "//button[normalize-space()='Browse by Make']")
    public WebElement browseByMake;

    @FindBy(xpath = "//button[normalize-space()='Browse by Style']")
    public WebElement browseByStyle;

    @FindBy(xpath = "//a[normalize-space()='Advanced Search']")
    public WebElement advanceSearch;

    @FindBy(xpath = "//button[normalize-space()='Search']")
    public WebElement searchButton;

    @FindBy(xpath = "//select[@id='makeCode']")
    public WebElement anyMake;

    @FindBy(xpath = "//select[@id='ModelCode']")
    public WebElement anyModel;


    public void verifytheFields(String value) {
//        if (value.equals(browseByMake.getText())) {
//            Assert.assertEquals(value, browseByMake.getText());
//        } else if (value.equals(browseByStyle.getText())) {
//            Assert.assertEquals(value, browseByStyle.getText());
//        } else if (value.equals(advanceSearch.getText())) {
//            Assert.assertEquals(value, advanceSearch.getText());
//        }

        String actual;
        if(value.equals(browseByMake.getText())){
             actual = browseByMake.getText();
            Assert.assertEquals(value,actual);
           // logger.info("{} is verified", value);  // {} yazan yer value yani webelement yani browsebymake
            logger.info("Browse By Make Assertion is successful");
        } else if(value.equals(browseByStyle.getText())){
            actual = browseByStyle.getText();
            Assert.assertEquals(value,actual);
           // logger.info("{} is verified", value);
            logger.info("Browse By Search Assertion is successful");
        } else if(value.equals(advanceSearch.getText())){
            actual = advanceSearch.getText();
            Assert.assertEquals(value,actual);
           // logger.info("{} is verified", value);
            logger.info("Advance Search Assertion is successful");
        }
        else{
            logger.warn("Failed");
        }
    }

    public void verifySerchButton() {
        Assert.assertTrue(searchButton.isDisplayed() && searchButton.isEnabled());
        logger.info("Search Button Assertion is successful");
    }

    public void verifyAnyMakeAnyModel(String make, String model) {
        //AnyMake
        Assert.assertTrue(anyMake.isDisplayed() && anyMake.isEnabled());
        logger.info(" {} is enable and visible", make);  // parametleri logger da kullandik

        //AnyModel
        Assert.assertTrue(anyModel.isDisplayed() && !anyModel.isEnabled());
        logger.info(" {} is enable and not visible", model);


    }
}
