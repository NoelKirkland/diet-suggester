# _In for a Penny in for a LB_

#### By _**Noel R. Kirkland, Erich Richter, JohnNils Olson, and Cody Fritz - 07/09/2020**_

### Description

This is a web application built to help you reach your goal weight. Use the app first by entering some information about your self i.e., height, weight, activity level, and goal weight. The application then takes this information and makes some quick calculations about how many calories you would need to consume each day in order for you to reach your goal weight. Once you have your total-calorie-consumption number you can easily remember it by using the application's Google Calendar API integration and add it to the top of your calendar each day.

The application will also help your figure out how many calories are in common food items. Use the search bar to the query nutritional data from literally hundreds of thousands of common food items using our [Edamam](https://www.edamam.com/) API integration.

The application also provides helpful information such as your BMR or Basal Metabolic Rate. Your BMR is how many calories you need to consume daily to maintain your current weight.

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

3. Application will calculate recommended daily calorie intake based on goal weight and preferred time-span 

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

    run the command `$npm run test` to see all passing specifications



## Setup/Installation Requirements

* Get an API key and API ID
  1. _Visit www.edamam.com. On the section that reads "Nutrition Analysis API" click the SIGN UP button_
  2. _Click the START NOW button under the "Developer" section and You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"_
  3. _At this point, you'll be able to access a dashboard that includes your API key as well as your API ID._

* Download the application from GitHub
  1. _Open the following web address in your browser:_
`https://github.com/NoelKirkland`
  2. _Click on the button labeled_ Repositories
  3. _Navigate into the `diet-suggester` repository and click the green button labeled_ Clone or download and download the zip to your computer_

* Open, add API key and API ID, and install
  1. _Open the downloaded application in a text editor (V.S. Code preferred)_
  2. _Create a file in the root directory of the application titled ".env"_
  3. _In your .env file you are going to write "APP_KEY = <span style="color:red;">YOUR-UNIQUE-API-KEY-HERE</span>" but replace the red text by highlighting it and pasting your API key there._
  4. Right below the API key in your .env file you are going to write "APP_ID = <span style="color:red;">YOUR-UNIQUE-API-ID-HERE</span>" and replace the red text with your API ID
  4. _Open a new terminal in your text editor (Ctrl+` in V.S. Code) and run the command <code>$ npm install</code>_

* Build and start
  1. _Once all webpacks have been installed, run the command `$npm run build` in the project's terminal_
  2. _Once application is fully built, run the command `$npm run start`. This should automatically open a tab in your default browser where you can now use the application_
  3. _Have fun!_


## Known Bugs

_The dependency `uglifyjs-webpack-plugin` is depreciated creating 1 moderate and 1 high vulnerability within this project_

## Support and contact details

_If you run into any problems, or have any questions at all, feel free to reach out to me at noel.kirkland@gmail.com_

## Technologies Used

_This webpage was constructed using HTML, CSS, Bootstrap, Javascript, Jquery, and Jest_

### License

-- _This project uses the [MIT](https://en.wikipedia.org/wiki/MIT_License) permissive free software license and is the intellectual property of Noel R. Kirkland - 2020_