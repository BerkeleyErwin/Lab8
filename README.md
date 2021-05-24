# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   
   1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
   You could use unit test to test if it is performing it's core functions properly, but
   E2E testing may be prefered here if you wish to test edge cases.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

    Yes, this is something constant that even though you may change around other things in 
    the code this unit test will remain a constant unless you decide to change the character length.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    We don't get to see the browser UI performs its actions but it will perform the actions.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

    Check if we're already on the settings page and if not go there by either using the command page.click(); or directly setting the url using page.goto();


