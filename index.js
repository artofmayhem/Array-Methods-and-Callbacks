import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */




console.log(fifaData[828]["Home Team Name"]);           // expect  Germany
console.log(fifaData[828]["Away Team Name"]);           // expect Argentina
console.log(fifaData[828]["Home Team Goals"]);          // expect 1
console.log(fifaData[828]["Away Team Goals"]);          // expect 0
console.log(fifaData[828]["Win conditions"]);           // expect "Germany win after extra time"





/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */





let finals = [];

function getFinals(data)                                                //function declaration taking in data as a parameter
{
finals = data.filter(   element  =>  element.Stage === 'Final'  );      // data cycler arrow function
       return finals;
}; 

console.log(getFinals(fifaData));                                       //function invocation using fifaData as argument






/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */






function getYears(data) 
{                           
    let yearResults = [];
    data.forEach( element => {
        yearResults.push(element.Year );
    });
      console.log(yearResults)      
};

getYears(finals);   





/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 




function getWinners(data)                                        // function declaration taking in callback as parameter
{       
    console.log(data[0].Year)
    let winners = [];
    for(let i = 0; i < data.length ; i++)
    {
        if(data[i]["Home Team Goals"] > data[i]["Away Team Goals"])
        {
            winners.push(data[i]["Home Team Name"]);
        } 
         if (data[i]["Home Team Goals"] < data[i]["Away Team Goals"])
        {
            winners.push(data[i]["Away Team Name"]);
        }
        else if (data[i]["Home Team Goals"] === data[i]["Away Team Goals"])
        {   
            winners.push(data[i]["Win conditions"]);
        };  
    };
    return winners;
}; 
 getWinners(getFinals(fifaData));                                // function invocation using getFinals callback as argument




/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */




 function getWinnersByYear(data, callback1, callback2)                   // function declaration using callback functions as parameters
  {               
    let finalsArray = getFinals(data);                                                       
    let dates = callback1(finalsArray);  
    //console.log(years);                                               // array of years numbers
    let winners = callback2(finalsArray);
    //console.log(winners);                                             // array of winner strings
   
                                                                        //.map //SYNTAX:   let newArray = arr.map(callback(currentValue[, index[, array]]) {}
    let winnerStatement = dates.map((year, i) => 
    {
         let winnerName = winners[i];
         console.log(`In ${year}, ${winnerName} won the world cup!`)
    })                                                                 // closing arrow function                                     

    return winnerStatement;
};
 //TEST CODE   
 //var output = getWinnersByYear(fifaData, getYears, getWinners);  
 //console.log(output);





 /* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
//let cb2 = ( total, currentValue) => {return total + currentValue.land_area;}




function getAverageGoals(data)                       // function declaration accepting data as a parameter
{   
     let homeTotal = [];                             // declare variable to catch home team goals .reduce value
     let awayTotal = [];                             // declare variable to catch away team goals .reduce value     
   
     let reducer1 = ((totalAfterEachIteration, item) => {    // .reduce all home team values into a single number using 0 as starting point 
         return item[1]["Home Team Goals"] + totalAfterEachIteration
     }, 0);
     let reducer2 = ((totalAfterEachIteration1, item1) => {  // .reduce all away team values into a single number using 0 as a starting point
         return item1[1]["Away Team Goals"] + totalAfterEachIteration1
     }, 0);                                                
     
                                                       
     return homeTotal / 2, awayTotal / 2;                      // calculation of ending (.reduce value / amount of data.length)
}                                                 

getAverageGoals(fifaData);                              // function invocation using fifaData as an argument

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
