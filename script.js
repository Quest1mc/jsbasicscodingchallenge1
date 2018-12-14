// var markHeight  = 1.8;
// var johnHeight = 1.78;
// var markWeight = 105;
// var johnWeight = 84;

// function bmiCalc (weight, height ){ 
//     return weight/ (height*height);
    
// }

// var markBmi = bmiCalc(markWeight,markHeight);
// console.log(markBmi);
// var johnBmi = bmiCalc(johnWeight,johnHeight);
// console.log(johnBmi);
// var maxBmi = markBmi>johnBmi;
// console.log ('Is Mark\'s BMI greater than John ? '+ maxBmi); 

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points,
 while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

//creat arrays from both players scores
// var johnScores = [89,120,103] ;
// var markScores = [116,94,123];
// var maryScores = [97,134,105];

// // use .reduce to sum up arrays 
// var totalJohnScore =johnScores.reduce(add,0);
//     function add(a, b) {
//         return a + b;
//     }

// var totalMarkScore =markScores.reduce(add,0);
//     function add(a, b) {
//         return a + b;
//     }

//     var totalMaryScore =maryScores.reduce(add,0);
//     function add(a, b) {
//         return a + b;
//     }
// var averageScoreJohn =totalJohnScore/3;
// var averageScoreMark =totalMarkScore/3;
// var averageScoreMary = totalMaryScore/3;

// if (averageScoreJohn>averageScoreMark  && averageScoreJohn>averageScoreMary){
//     console.log('John is the winner! With an average of '+ averageScoreJohn);
// }
// else if  (averageScoreMark>averageScoreJohn && averageScoreMark>averageScoreMary){
//     console.log('Mark is the Winner!With an average of ' + averageScoreMark);
// } 
// else {
// console.log('Mary is the winner!With an average of '+ averageScoreMary);
// }

// console.log (totalJohnScore);
// console.log(totalMarkScore);
// var averageScore 
// ;


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

var restaurantBills= [124,48,268];
// var arryLength = restaurantBills.length;
// console.log(arryLength);

//  function tipCalc1(){
//     for (i=0;i<restaurantBills.length;i++)
//     {
//     if (restaurantBills[i]<50)
//     {return restaurantBills[i]*.2}
//     else if (restaurantBills[i]>50 && restaurantBills[i] < 200)
//     {
//     return restaurantBills[i]*.15
//     }  
//     else { return restaurantBills[i]*.1
//     }
//         }
//             }
//   console.log(tipCalc1());


// // the tip is .2 of the bill using .map
// var tips = restaurantBills.map(x => x * 0.2);
// var tipPlus = restaurantBills.map(x => x * 0.2 + x);

// console.log(tips);
// console.log(tipPlus);

// Stefan redo challenge three and READ THE BLOODY CONDITIONS or USER STORY FIRST !!!


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


// var mark ={
// fullname :"Mark Smith",
// mass: 104,
// height: 1.80,
// bMi : function () { return this.mass / (this.height * this.height);}
// };

// console.log(mark.bMi());

// var john = {
//     fullname : "John Akeem",
//     mass: 76,
//     height: 1.66,
//     bMi : function () { return this.mass / (this.height * this.height);}
//     };


// if (mark.bMi> john.bMi) {
//     console.log(`${mark.fullname} has the BMI of ${mark.bMi()} and is  higher  bmi than ${john.fullname} who has ${john.bMi()} `);
// } else  if (john.bMi> mark.bMi) {
//     console.log(`${john.fullname} has the BMI of ${john.bMi()} and is  higher  bmi than ${mark.fullname} who has ${mark.bMi()} `)
//     }
// else {
//     console.log (`Both ${john.fullname} and ${mark.fullname} have the same BMI `);
//     }
