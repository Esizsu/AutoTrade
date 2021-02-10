@smoke_test
Feature: Verifying the search

  Background: Browser testing
    Given User test with "firefox" browser

  # Background: chrome testing
  #  Given user test with "chrome" browser

  @smoke_test, @unit_test
  Scenario: Homepage verification
    Given User is on homepage
    Then Verify that "Browse by Make" is present
    Then Verify that "Browse by Style" is present
    Then Verify that "Advance search" is present
    And Verify that Search button is present
    Then Verify that Any "Make" and Any "Model" are present

    @smoke_test, @unit_test
    Scenario: User checks the Advance Search link
      Given User is on Advance Search homepage
      Then User enter "30004" in the zip code text box
      Then User select the "Certified" check box under "Condition"
      Then User select the "Convertible" check box under "Style"
      Then User Update the year from "2017" to "2020"
      Then User select Make as "BMW" under Make, Model & Trim section
      Then User clicks Search button
      Then User verifies that he is in result page
      Then User verifies that he sees only "BMW" cars in the result page
      Then Display in console the total number of cars in the results page








