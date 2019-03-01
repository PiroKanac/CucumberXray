Feature: 

	
	@XRAYT-126 @XRAYT-134
	Scenario: CLONE - Cucumber: Test Contact Form1
		    Given User is on login page
		    When User enters username
		    And  User enters password
		    And  User clicks on signin button
		    Then User logged in successfully
			

	
	@XRAYT-133 @XRAYT-134
	Scenario: CLONE - Cucumber: Test Contact Form2
		    Given User is on login page
		    When User enters incorrect username
		    And  User enters password
		    And  User clicks on signin button
		    Then User should not be logged in successfully