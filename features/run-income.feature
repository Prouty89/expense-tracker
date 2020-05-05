
@Income
Feature: Add Income to your tracker
  I can add income as monetary units to tracker
  
  Scenario: Tracking my expenses
    Given I add a positive number
    When I click "Add Transaction"
    Then I should see it reflect in my balance. 