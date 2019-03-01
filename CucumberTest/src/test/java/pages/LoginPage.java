package pages;

import java.util.ResourceBundle;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
	
	ResourceBundle element;
	WebDriver driver;
	
	public LoginPage(WebDriver driver)
	{
		this.driver = driver;
		element = ResourceBundle.getBundle("Elements");
	}

	public void enterUsername(String uname)
	{
		//ResourceBundle element = ResourceBundle.getBundle("Elements");
		driver.findElement(By.id(element.getString("login_username_id"))).sendKeys(uname);
	}
	
	public void enterPassword(String pass)
	{
		driver.findElement(By.id(element.getString("login_password_id"))).sendKeys(pass);
	}
	
	public void clickSigninButton()
	{
		driver.findElement(By.xpath(element.getString("login_signin_xpath"))).click();
	}
}
