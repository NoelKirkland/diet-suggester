# _Weight Loss Calculator_

#### _Brief description of application, Date of current version_

#### By _**Noel R. Kirkland, Erich Richter, JohnNils Olson, and Cody Fritz**_

## Description

_Application will display users BMI and display calories needed to gain or lose in a selected time frame._

### Specs

1. Application will take multiple demographic metrics and activity level from a series of drop-down menus and create a User object

    | Input | Output |
    | :------------- | :------------- |
    | Male, 5', 9", 155, 27 | {gender: "Male", heightFeet: 5, heightInches: 9, weightPounds: 155, age: 27, activity: 3} |
    |||

2. Application will calculate user's basal metabolic rate

    | Input | Output |
    | :------------- | :------------- |
    | Male, 5', 9", 155, 27 | this.bmr = 2663 | 
    |||

3. Application will calculate recommended daily calorie intake based on goal weight and preffered time-span 

    | Input | Output |
    | :------------- | :------------- |
    | {... GoalWeight: 145, timeFrameDays: 60, ...} | this.calPerDayLose = 2080 |
    |||

4. Application will return calories-per-ounce based on what food is searched

    | Input | Output |
    | :------------- | :------------- |
    | Apple | calories-per-ounce = 15 |
    |||

5. Application will have an integrated calendar function that will add events to Google Calendar that include the calculated daily-recommended-calories

    | Input | Output |
    | :------------- | :------------- |
    | this.GoalWeight = 145, this.timeFrameDays = 60, this.CalPerDayLose = 2080 | _*Google Calendar Event Created*_ Event description: "To reach your goal weight you need to eat no more than 2080 calories today" |
    |||



## Setup/Installation Requirements

* _Get an API key and API ID_
  1. Visit www.edamam.com. On the section that reads "Nutrition Analysis API" click the SIGN UP button.
  2. Click the START NOW button under the "Developer" section and You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
  3. At this point, you'll be able to access a dashboard that includes your API key as well as your API ID.

* _Download the application from GitHub_
  1. _Open the following web address in your browser:_
`https://github.com/JohnNilsOlson`_
  2. _Click on the button labeled_ Repositories
  3. _Navigate into the `bmr-calculator` repository and click the green button labeled_ Clone or download and download the zip to your computer_

* _Open, add API key and API ID, and install_
  1. _Open the downloaded application in a text editor (V.S. Code preferred)_
  2. _Create a file in the root directory of the application titled ".env"_
  3. _In your .env file you are going to write "APP_KEY = <span style="color:red;">YOUR-UNIQUE-API-KEY-HERE</span>" but replace the red text by highlighting it and pasting your API key there._
  4. Right below the API key in your .env file you are going to write "APP_ID = <span style="color:red;">YOUR-UNIQUE-API-ID-HERE</span>" and replace the red text with your API ID
  4. _Open a new terminal in your text editor (Ctrl+` in V.S. Code) and run the command <code>$ npm install</code>_

* _Build and start_
  1. _Once all webpacks have been installed, run the command `$npm run build` in the project's terminal_
  2. _Once application is fully built, run the command `$npm run start`. This should automatically open a tab in your default browser where you can now use the application_
  3. _Have fun!_


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_If you run into any problems, or have any questions at all, feel free to reach out to me at teemweek@gmail.com_

## Technologies Used

_This webpage was constructed using HTML, CSS, Bootstrap, Javascript, Jquery, and Jest_

### License

Copyright (c) 2020 **_WeightLoss Co LLC_**