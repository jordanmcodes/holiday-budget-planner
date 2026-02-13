# holiday-budget-planner

# Table of Contents 

- [What is the purpose of the application?](#what-is-the-purpose-of-the-application?)
- [User interaction](#user-interaction)
- [Application setup](#application-setup)
- [Visuals/Styling](#visualsstyling)
- [Automated and Manual Testing](#automated-and-manual-testing)
- [Testing](#testing)
- [HTML,CSS,and JSLint Validation](#html-validation)
- [Screenshots/user stories](#screenshotsuser-stories)
- [Testing summary](#testing-summary)
- [Development process](#development-process)

### Source material

All of my material has come from W3 schools. All HTML and CSS accredited to previous lectures on this courrse. Below are the links for inspiration for Javascript:
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://www.w3schools.com/js/js_htmldom_elements.asp
https://www.w3schools.com/js/js_htmldom_collections.asp
https://www.w3schools.com/js/js_numbers.asp



## What is the purpose of the application?

The purpose of this application is to help people with their travel planning needs. When it comes to travelling, many are unprepared for having multiple expenses to account for. For example, food, hotel tickets, and excursions are only a handful of expenses that come alongside an exciting holiday. The purpose of this application is to simplify the budgeting issues into one clean, simple, and easy-to-read application that will add up their various expenses and provide you with a remaining figure.

Immediate feedback is essential for any simple application; users simply want to know how much they can fork out on their various expenses. For example, if you have £1000 to spend on a three-day trip to Scotland, you're going to need a budget to maximise the spending while on a tight budget. This application breaks down the four most important parts of a holiday budget. The food, the hotels, the flight tickets, and spending money/excursions.

The instructions are clear. Before adding in your expenses, you are instructed to enter your holiday budget. If not, a large error message will appear, prompting you to enter your budget. This provides a streamlined user journey from discovery to entering the budget, to entering your expenses, to revealing the remaining budget.

I have used a simple form and table layout for this application because this is for those who are looking to get into budgeting for a trip, instead of winging it. I have ensured the font is easy to read, with text size big enough for all users, which remains true even when the application window is decreased, and the visibility will remain. When users are finished using this application, they will have a basic understanding of the fundamentals of holiday budgeting and will be better prepared when planning their next trip.

## User interaction

When you are first loaded into the application, and read through the introduction text, users will feel obliged to click the button to start the process. They will, however, be met with a message that appears below the button, stating they must enter in their pre-holiday budget. This is the figure they will begin their budgeting plan with. Say £500, for example. Once they have clicked on the button afterwards, their budget will be displayed below. Only by entering in their expenses into the table, and re-entered the button, will the budget change.

## Application setup
The application is separated into three pages internally. Those being the HTML, CSS, and Javascript pages. These will each have their own code that will allow the simple application to run. The HTML is where the bulk of the work is, hosting the header, paragraphs, and the table, for example. The CSS is where I styled the application. For example, changing the background to lightcyan, and moving the buttons from the left-hand side of the page to the center. The Javascript page is where I created the functions that allowed the button and the table to work hand-in-hand.

## Visuals/Styling
The page benefits from its simplicity, and that is reflected in the styling choices. Everything is centered towards the middle of the page, styled through classes. The buttons, for example, were created using divs so that they can have their own styling. As for the text itself, I ensured that it remained consistent throughout, with 20px for the size, and Verdana for the font. 

## Automated and Manual Testing

Automated testing is where programmers will use automated tools to test their code. This can often be for large scale projects, or for applications that include Javascript and or other languages, that will require multiple rounds of testing. Automated testing is used when the application requires human intereaction. For example, if we were to use my application, we could use an automated testing tool to test what happens when our expenses costs more than the budget we allocated at the top. To answer the question; "when would you do automated testing?": Automated testing is done during the development process and when the information may change. For example, the user will likely change their minds frequently when adjusting their budgets. 

Manual testing is where the programmer will test each function one by one without the use of any software. The easiest example, using my application, is testing that the button works when I click it. Manual testing can be done at any stage of the development cycle, but many will leave it to the end with a complete checklist to test for accessbility, functionality, and more. 

## Testing

This application was manually tested, assessing the applications functions, accessbility, and responsiveness. 

### Functional

| Test name | Expected Outcome | Result | 
|-----------|------------------|--------|
| Pressing the button without inputting a number into the holiday budget.| Press the button without entering any figures will result in error message, stating "You must enter your holiday budget first" | Error message appeared with the exact message described in the expected outcome section. | 
| Enter budget | When entering in £1000, the text will change to showcase that the remaining budget is in fact £1000. Entering in letters will not showcase that word in replacement of the figure. Only numeric values can be displayed. | After typing £1000, that figure showed as remaining budget | 
| Enter expenses | The expenses will substract from the remaining budget. I will add "food" expense to the budget of £1000. Meaning once the button has been pressed, it will showcase £800 left. | £200 was subtracted from £1000 in the remaining budget | 

### Useability 
| Test name | Expected Outcome | Result | 
|-----------|------------------|--------|
| Read instructions | Paragraphs will be easy to read without the need to zoom in.  | Paragraphs are clear and visible to all users | 
| Error message visibility | Error message will be readable and will be clear enough to instruct the user on what to do next after encountering said error.| Error message is big and clear for user to read | 

### Responsiveness 
| Test name | Expected Outcome | Result | 
|-----------|------------------|--------|
| View app on mobile | The application will be tested for visibility on the following formats: IphoneSE, Samsung Galaxy S8+, and Surface Pro 7.| App is visible and text is clear even on mobile | 
| Resize window | Layout remains intact even when window is shrunken across multiple sizes using the lighthouse tool. | Table, button, and text is clear when window size altered across multiple sizes, going from 100%, down to 75%, and lastly, 50%. from the original lighthouse responsiveness testing page.| 

### HTML Validation
![HTML Validation](assets/images/html-validation-index.png)

### CSS Validation
![CSS Validation](assets/images/css-validation-style.png)

### Lighthouse testing
![Lighthouse testing](assets/images/lighthouse-test.png)

### JSHint - Linter
This application passes through JSHint without any major warnings or errors in the code. 
![JSHint](assets/images/jshint.png)

## Screenshots/user stories
![Landing page](assets/images/landing-page.png)
The user story links to the understanding. When they first see the page, what are they to do? The design and styling clearly showcases a clear journey for the user to go on. The introduction paragraph makes it easy to understand what the application is about, along with the header. 

![Error message](assets/images/error-message.png)
As a user, they will always want to be told about an error, and how they can fix that error. For this application, fixing the error is a simple one. If the user clicks the button first, they will be met with the error message, instructing them to enter in their holiday budget.

![Remaining budget](assets/images/remaining-budget.png)

When people use a budget planner, they want to be able to see in clear writing what is going to be the biggest dent to their finances. In the cast of the image above, the hotel is going to be the biggest contributor to the remaining budget, which is £75 from an initial £1000 pre-holiday budget. 

## Testing summary 

The results of the testing above showcases that the application is working as intended with no errors. My useability testing showcased the application is easy to understand, with clear instructions where neccessary. 

As for responsiveness, the application remains unaffected when the size of the window changes. The app remains centered, with the text big enough for the user to see. This application would work as intended on mobile. 

## Development process 

The development process for this application was as followed. It followed a basic pattern, with the HTML being the bulk of the first phases of the development process. The idea was to get the headings and opening paragraphs in place before moving onto the button. I didn't at this stage do any scripting for the button, only to ensure that there is a button in place.

This was because I had to create a paragraph below, that would act as an action statement for the user. For example if they didn't input a number and they clicked the button, it would change to an error message. The javascript was applied to the button and table created, as this is where the numbers were hosted, also known as the prices. 

The CSS styling aided in visibility,  readability, and user experience. Ensuring that all of the paragraphs had the same font, font-size, and more. 