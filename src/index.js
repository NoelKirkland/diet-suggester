import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from '../src/weight-loss-calculator.js';
import { getFood, toOunces } from '../src/nutrition-api.js';


$(document).ready(function () {
  $("#food-button").click(function () {
    let food = $("#food-input").val();

    async function getElements(){
      const response = await getFood(food);
      if (response === false){
        $('#calories-in-food').text(`There was an error handling your request.`);
      } else {
        console.log(response.parsed[0].food.nutrients.ENERC_KCAL);
        $('#calories-in-food').text(`The calories in one ounce of ${food} is ${toOunces(response.parsed[0].food.nutrients.ENERC_KCAL)}.`)
      }
    }
    getElements();
    $("#food-input").val("");
  });
  $('form#user-info').submit(function(event) {
    event.preventDefault();

    let inputGender = $('#gender').val();
    let inputHeightFeet = parseInt($('#height-feet').val());
    let inputHeightInches = parseInt($('#height-inches').val());
    let inputWeightPounds = parseInt($('#weight-lb').val());
    let inputAge = parseInt($('#age').val());
    let inputGoalWeight = parseInt($('#goal-weight').val());
    let inputtedTimeFrame = parseInt($('#time-frame').val());
    let inputActivity = parseInt($('#bmr').val());

    let newUser = new User(inputGender, inputHeightFeet, inputHeightInches, inputWeightPounds, inputAge, inputGoalWeight, inputtedTimeFrame, inputActivity);
    newUser.calculateBMR();
    $('.results').show();
    $('.form').hide();

    $('#BMR-results').text(`According to the information you have entered, your BMR should be about ${newUser.bmr} meaning, ${newUser.bmr} is how many calories you would consume simply to maintain the weight you are at now.`);
    newUser.calculateCaloriesPerDay();

    function display(inputWeightPounds, inputGoalWeight){
      if (inputWeightPounds > inputGoalWeight){
        $('#diet-results').text(`To lose ${(newUser.weightDifference).toFixed()} pounds in ${newUser.timeFrameDays} days you must eat ${newUser.calPerDayLose} calories per day`);
      } else if (inputWeightPounds < inputGoalWeight){
        $('#diet-results').text(`To gain ${(newUser.weightDifference).toFixed()} pounds in ${newUser.timeFrameDays} days you must eat ${newUser.calPerDayGain} calories per day`);
      }
    }
    display(inputWeightPounds, inputGoalWeight);
  });
});