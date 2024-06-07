# this project is an on giong work in progress

this project runs on old version of node " nvm use 16.13.2"

# Accessible University Website Prototype - CI/CD Accessibility Testing

This project is an extension of a school project conducted by my group, where we reviewed the accessibility of two pages of a university website. The goal of this current project is to build upon that foundation by implementing accessibility testing as part of a Continuous Integration (CI) pipeline.

## The Importance of Automated Accessibility Testing

Integrating automated accessibility testing into the development process can greatly improve the accessibility of a website from the early stages of development. It encourages developers to write code with accessibility in mind and helps catch potential issues early.

However, it's important to note that while automated testing is a valuable tool, it does not replace manual testing. Automated tests can't fully replicate a user's journey or catch every possible accessibility issue.

## Tools and Processes

We've implemented linting in our VS Code environment and integrated Cypress Axe for automated accessibility testing through GitHub Actions.

Here are some screenshots demonstrating the utility of these tools:

- Errors detected by simple automated testing in the browser using Axe,wave and cypress axe by creating a cypress test:
  <!-- TODO: Add image references here -->
  <!-- ![Axe Screenshot](path/to/screenshot.png) -->

![the image shows the very first test run by cypress-axe on the home page and the number of error detected from the automated testing process](public/mockup_website_cypress_axe_in_CI/first_full_page_test_and_axeDevTool_browser_test_result.png "cypress-axe logs and axes audit for the home page")

![the image shows the very first test run by cypress-axe on the conatct page and the number of error detected from the automated testing process](public/mockup_website_cypress_axe_in_CI/first_contact_page_cypreesUI_test_and_axe_tool.png "cypress-axe logs and axes audit for the contact page")

And now below are the results of the test after iterating fixes we for the accessibility issues caught by cypress axe.

![log showing accessibility report with 0 issues with the logs of cypress](public/mockup_website_cypress_axe_in_CI/lastly_after_all_fixes_cypress_UI_shows_0_a11y_errors.png "test result after fixing issues shown by cypress axe")

Below are a11y issues shown after test with wave on the browser
![errors shown after first test with wave browser extension](public/mockup_website_cypress_axe_in_CI/wave_first_home_page_check.png "errors shown after first test with wave browser extension of home page")

![errors shown after first test with wave browser extension](public/mockup_website_cypress_axe_in_CI/wave_first_contact_page_check.png "errors shown after first test with wave browser extension of contact page")

And now below are the results of the test after iterating fixes we for the accessibility issues caught by cypress axe and the errors wave caught as well.

![errors shown after all fixes made ](public/mockup_website_cypress_axe_in_CI/after_wave_first_home_page_check.png "errors shown after first test with wave browser extension of home page")

![errors shown after all fixes made ](public/mockup_website_cypress_axe_in_CI/after_wave_first_contact_page_check.png "errors shown after first test with wave browser extension of home page")

some of the browser extension like wave how an invalid aria-decribeby, however the code that execute as intended, with screen readers as well and it does show the alert message as supposed. 




## Links

- (https://daihoc.fpt.edu.vn/en/)(#) 
- (https://github.com/alhousseiny12345gueye/Accessible-University-wesite-prototype)(#) 

This project serves as an exploration of how incorporating accessibility testing into a CI pipeline can enhance the accessibility of a website.