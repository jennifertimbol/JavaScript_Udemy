// Multiple Arguments
// In some dice games like Craps, a roll of two 1's is called "Snake Eyes". It's generally not a good roll. Please right a function called isSnakeEyes, which accepts two numbers as inputs, presenting two dice. If the two numbers are both 1's please print "Snake Eyes!" otherwise print "Not Snake Eyes"

// Create a function

// function isSnakeEyes(die1, die2){
//     if (die1 == 1 && die1 == die2) {
//         console.log('Snake Eyes')
//     }
//     else {
//         console.log('Not Snake Eyes')
//     }
// }

// isSnakeEyes(1,1); //Snake Eyes
// isSnakeEyes(2,4); //Not Snake Eyes!
// isSnakeEyes(1,5);

// Return Value
// Its time to practice returning values from a function. Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together). Make sure to return the value instead of printing it!


// function multiply(num1, num2){
//     let total = num1 * num2;
//     console.log(total);
//     return total
// }
// multiply(2,3);

// isShortsWeather Function
// I often struggle to know weather I should wear shorts or pants on a given day. (this is a complete lie). It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather.

// It should accept a single number argument, which we will call temperature (but you can name it whatever you want)
// If temperature is greater than or equal to 75, return true
// Otherwise, return false

// function isShortsWeather(temp){
//     if (temp>=75){
//     console.log('true');
//     return true;
//     }
//     else {
//         console.log('false');
//         return false;
//     }
// }


// isShortsWeather(80);
// isShortsWeather(63);

// Write a function called lastElement which accepts a single array argument. The function should return the last element of an array(without removing the element). If the array is empty, the function should return null.

// function lastElement(myArray){
//     if(myArray.length === 0) {
//         return null;
//     }
//     else {
//         return myArray[myArray.length-1];
//     }
// }

// lastElement([1,30,8,5]);

// function capitalize(str){
//     var newString = ''; 
//     for(let i=0; i<str.length; i++){
//         newString += str[i];
//     }
//     console.log(newString);
//     return newString;
// }

// capitalize('hello');

// function sumArray(array){
//     var x = 0;
//     for(let i=0; i<array.length; i++){
//         x += array[i];
//     }
//     console.log(x);
//     return x;
// }

// sumArray([1,3,5,7]);

var daysOfWeek = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
function returnDay(x){
    for(let i=0; i<daysOfWeek.length; i++){
        if(x === [i]){
            console.log(daysOfWeek[i]);
        }
        else {
            console.log(null);
        }
    }
}
returnDay(3);