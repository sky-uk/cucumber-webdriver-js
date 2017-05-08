@login
Feature: Verify Sky Login functionality

    @successful-login
    Scenario: Successful Login
        Given I open the url "http://sp-shop-select-stage.herokuapp.com/login"
        When the user submits valid login details
        And   the title is "Phil Test - Sky Shop - Sky Sports Upgrade"
