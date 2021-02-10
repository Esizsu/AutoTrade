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
    /*bu methodu Cross Browser testing yapabilmek icin olusturduk.
     2 sekilde Cross Browser testing yapabiliriz.
     1-bu sekilde methodumuzu olusturup set.property ile,
     2- yada Mydriver classimizdaki browserlar degerlerinden hangisini istiyorsak(chrome, firefox etc.
      birini ConfigurationReader de  browserimiza gondeririz. o zman bu methoda ihtiyac yok.Bu saglikli bir yontem
     */

    public void userTestWithBrowser(String brs) {
        if(brs.equals("chrome")){
           // ConfigurationReader.getProperty("browser"); ya bunu
            System.setProperty("browser","chrome");   // yada bunu yaptiririz
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



    /*
    orneke test methodunun Calisip calismadigini kontrol ettik.
    @Test
    public void test(){
     MyDriver.get().get("https://www.autotrader.com/");
        System.out.println("my "+ ConfigurationReader.getProperty("url")); //url'imi comut satirina yazdirir


        // driverimizi cagiriyoruz web page'e land edebilmek icin.
        burada MyDriver'in constructorini (Singilton) yani private yaptigimiz icin ve de metodlar static oldugu icin
        Classin objectini olusturmadan direk metodlara ulasabiliyoruz.






        Non-static( consturactor ile object olusturmamiz gerekiyor)
        Normalde object olusturmak isini consturactor yaptigi icin, constructor'i public yapip methodlarimizi da public
        yapinca, direkt o classin objectini olusturup (classname.obj = new classname) metodlara ulasiriz.
        Hem class icinde hemde class disinda ulasiriz.(public cunku)

        Static ( object olusturmadan, methodlara direk ulasamak icin)
        Ama biz classimizin ulasilir olmasini yani object olusturulmasini istemiyorsak, o zaman Constriuctor'i private
        (encapsulation) Singliton dizayn pattern'a cevirip methodlarimizi da static yapariz ki, object olusturmadan direkt,
        methodlara ulasmak icin.

    }

     */
}

