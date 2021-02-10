Feature: Verifying the search

    @unit_test
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








