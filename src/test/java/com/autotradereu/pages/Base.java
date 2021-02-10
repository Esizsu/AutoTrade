package com.autotradereu.pages;

import com.autotradereu.utils.MyDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class Base {

    public Base() {
        PageFactory.initElements(MyDriver.get(),this);

        // Tum sayfalrada FinBy anotation'i kullanacagimiz vede her seferinde yazmamak icin bu pageFactory'i
        //icin base class yaptik
    }
    public void waitSomeTime(Long miliSeconds) {
        try {
            Thread.sleep(miliSeconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
            // burada try catch kullandik waitSomeTime metodu olusturunca,
            // cunku hatayi bulunca methodu durdurmuyor yani
            //torminet yapmiyor. devam ediyor run etmeye.Reusable methodlar icin  daha uygun

            // throws hata buldugu yerde duruyor.

    /**
     *  this script must scroll, until link element is visible
     *  once link element visible, it will stop scrolling
     *  arguments[0] = means first webelement after comma
     *  arguments it's an array of webelements after comma
     *  arguments[0] = link web element, it can be any web element
     */
    public void scrollDown(WebElement str) {
        JavascriptExecutor javascriptExecutor = (JavascriptExecutor) MyDriver.get();

        javascriptExecutor.executeScript("arguments[0].scrollIntoView(true)",str);
      // javascriptExecutor.executeScript("window.scrollBy(0,200)", str);

    }

}
