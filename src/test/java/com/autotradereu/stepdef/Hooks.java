package com.autotradereu.stepdef;


import com.autotradereu.utils.ConfigurationReader;
import com.autotradereu.utils.MyDriver;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.TimeUnit;


public class Hooks {

    Logger logger = LoggerFactory.getLogger(Hooks.class);

    @Before
    public void setup() {
        logger.info("##### SETUP STARTED (HOOK) ######");
        MyDriver.get().manage().window().maximize();
       // MyDriver.get().get(ConfigurationReader.getProperty("baseurl"));
        // bu normalde aktif olmasi lazim ama cookie sorunumuz var o yuzden senaryolarin givenlerine url leri verdik
        //Normalde bir baseurl vede burda olmasi lazim
        MyDriver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    @After  //
    public void after(Scenario scenario){
        if(scenario.isFailed()){
            logger.error("!!!!Test Failed! check the screenshot!!!!");
            byte[] screenshot= ((TakesScreenshot)MyDriver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot,"images/png","Screenshot");
            //scenario.embed(screenshot,"images/png"); versiyon 4.7.4

        }else {
            logger.info("Test Completed");
        }
        logger.info("###### END OF TESTS #####");

        MyDriver.close();
    }
}
