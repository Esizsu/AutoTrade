package com.autotradereu.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
    /**
     * To retrieve data from configuration.properties file.
     */
    private static Properties configFile;

    static {

        Logger logger = LoggerFactory.getLogger(MyDriver.class);

        // we wrote our try catch in blocks because we want to run it before anything else.
        // Blocks execute as soon as the class runs.
        try {

            //File path of configuration.properties
            FileInputStream fileInputStream = new FileInputStream("autoconfig.properties");
            //initialize properties object
            configFile = new Properties();
            //load configuration.properties file
            configFile.load(fileInputStream);
            //close input stream
            fileInputStream.close();
        } catch (IOException e) {
            logger.info("Failed to load properties file!");
            e.printStackTrace();
        }



        // bisey okumak istedigimizde propertiesten, asagidaki methodu cagirip, key olarak property'i veririz
       // autoconfig propertimizi asagidaki gibi cagirarak.
       // ConfigurationReader.getProperty("browser");
    }

    public static String getProperty(String key) {
        return configFile.getProperty(key);

    }








}
