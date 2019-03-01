package testcases;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import assertions.Compare;
import base.CreateDriverInstance;
import cucumber.api.java.en.*;
import pages.LoginPage;

public class Steps {
	
	WebDriver driver;
	LoginPage login;
	
	@Given("^User is on login page$")
	public void user_is_on_login_page() throws Throwable {

		CreateDriverInstance driverInstance = new CreateDriverInstance();
		driver = driverInstance.generateDriverInstance();
	}

	@When("^User enters username$")
	public void user_enters_username() throws Throwable {
	
		login = new LoginPage(driver);
		login.enterUsername("Uname1");
	}

	@When("^User enters password$")
	public void user_enters_password() throws Throwable {
		login.enterPassword("Hello123");
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		login.clickSigninButton();
	}

	@Then("^User logged in successfully$")
	public void user_logged_in_successfully() throws Throwable {
		Assert.assertFalse(Compare.validatePageURL(driver, "https://www.facebook.com/"));
	}

	@When("^User enters incorrect username$")
	public void user_enters_incorrect_username() throws Throwable {
		login = new LoginPage(driver);
		login.enterUsername("Uname1");
	}

	@Then("^User should not be logged in successfully$")
	public void user_should_not_be_logged_in_successfully() throws Throwable {
		Assert.assertFalse(Compare.validatePageURL(driver, "https://www.facebook.com/"));
	}

}
