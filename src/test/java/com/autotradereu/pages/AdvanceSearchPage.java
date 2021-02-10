package com.autotradereu.pages;

import com.autotradereu.utils.MyDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

public class AdvanceSearchPage extends Base{

     Logger logger = LoggerFactory.getLogger(AdvanceSearchPage.class);

    @FindBy(xpath = "//input[@name='zip']")
    public WebElement  zipcode;

    @FindBy(xpath = "//div[contains(text(),'Certified')]")
    public WebElement certified;

    @FindBy(xpath = "//div[normalize-space()='Convertible']")
    public WebElement  convertible;

    @FindBy(xpath = "//select[@name='startYear']")
    public WebElement startYear;

    @FindBy(xpath = "//select[@name='endYear']")
    public WebElement  endYear;

    @FindBy(xpath = "//select[@name='makeFilter0']")
    public WebElement  carModel;

    @FindBy(xpath = "//button[normalize-space()='Search']")
    public WebElement searchButton;

   // @FindBy(xpath = "//div[@data-cmp='inventoryListing']")
    //public WebElement numberOfListing;


    public void zipCode(String zipCode) {
        // should clean cookies, cause search button is not working
        // by automated browser, after this all process.
        MyDriver.get().manage().deleteAllCookies();
        zipcode.clear();
        waitSomeTime(2L);
        zipcode.sendKeys(zipCode); // zipcode'u features filedaan aliyor as 30004

    }

    public void selectCheckBox(String checkBox) {  // burada iki method yazmamak icin certified ve convertible ayni methodta yaptik
        if (checkBox.equals(certified.getText())){  // iki ayri methodta yazdirip clickletebilirdik
            certified.click();
        }else{
            scrollDown(convertible); // element bazen visible olamyabilir, yarim acildiysa, internet hizindan vs.
            waitSomeTime(5000L);
            convertible.click();        // o yuzden scrollDown kullandik Base classimizda
            }
        }
    public void clickSearchButton() {
        scrollDown(searchButton);
        searchButton.click();

    }

    public void modelYears(String startYears, String endYears) {
        scrollDown(startYear); // elementi scrolldown yaptik

        Select selectFromYear = new Select(startYear);
        selectFromYear.selectByValue("2017");

        Select selectToYear = new Select(endYear);
        selectToYear.selectByValue("2020");
    }

    public void chooseModel(String model) {
        scrollDown(carModel);
        Select carModels = new Select(carModel);
        carModels.selectByValue("BMW");
    }


    public boolean numberOfListingCount(String model) { //burdan BMW geliyor
        // 8 tane bmw cars var. onlarin subheading listesini aldik.

        List<WebElement> listCars = MyDriver.get().findElements(By.xpath("//div[@data-cmp='subheading']"));
        boolean isBMW = true;
        for (WebElement webElement : listCars){
            isBMW = !webElement.getText().contains(model);
        }
        logger.info("ALL CARS ARE BMW");
        return isBMW;

        //SOLUTION 2
        //public void numberOfListingCount(String model) { //burdan BMW geliyor
       // waitSomeTime(30000L);
//        List<WebElement>list = MyDriver.get().findElements(By.xpath("h2[@data-cmp=\"subheading\"]"));
//
//        int count=0;
//        int nonBMWcount=0;
//        for(WebElement each : list){
//            if(!each.getText().contains(model)){
//                nonBMWcount++;
//                logger.warn("We have found {} listing which is not {} ",nonBMWcount,model);
//
//            }
//            count++;
//        }
//        logger.info("We found {} non BMW listing inclunding sponsors",count);
//        logger.info("There is non {} listing",model);

        //SOLUTION 3

//        for (int i=0; i<=list.size(); i++) {
//            System.out.println(list.get(i).getText()); bu olmasada olur
//
//            if (!list.get(i).getText().contains(model)) {
//                System.out.println("there is non BMW listing");
//                System.out.println("listing found %s : "+ list.get(i).getText());
//                logger.info("We found non BMW listing {}",list.get(i).getText());
//
//            }
//        }
        //            logger.info("Total BMW listing is {} ", list.size());



    }


}

