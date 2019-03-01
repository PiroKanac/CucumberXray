package assertions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Compare {
	
	// When using static we can call a method directly from class name, don't need to use object of that class
	public static boolean validatePageURL(WebDriver driver, String expectedURL)
	{
		boolean result = false;
		if(driver.getCurrentUrl().equalsIgnoreCase(expectedURL))
				{
					result = true;
				}
		return result;
	}
	
	
	public boolean validateElementExistbyXpath(WebDriver driver, String xpath)
	{
		boolean result = false;
		try
		{
			driver.findElement(By.xpath(xpath));
			result = true;
		}
		catch(Exception e) {}
		return result;
	}
}
