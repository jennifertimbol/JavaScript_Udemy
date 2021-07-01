// console.log("BEFORE CONDITIONAL") /*This executes*/
// if (1+2 === 2) {
//     console.log("MATH STILL WORKS!") /*This executes if true*/
// }
// console.log("AFTER CONDITIONAL") /*This executes*/


// let random = Math.random();
// if (random <0.5) {
//     console.log("YOUR NUMBER ISLESS THAN 0.5!!")
//     console.log(random);
// }
// if(random >=0.5) {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5!!")
//     console.log(random);
// }


// const dayOfWeek = 'Monday';

// if (dayOfWeek === 'Monday') {
//     console.log("UGHHH I HATE MONDAYS!")
// }
// else if (dayOfWeek === 'Saturday') {
//     console.log("YAY SATURDAY")
// }
// else if (dayOfWeek === 'Friday') {
//     console.log("FRIDAYS ARE DECENT")
// }

const password = promt("Please enter a password");
if (password.length >= 6) {
    console.log("Long enough password")
}
else {
    console.log("Password too short. Must be atleast 6 characters")
}

if(password.indexOf(' ') == -1) {
    console.log("Goodjob! No space")
}
else {
    console.log("Password cannot contain space!")
}

// They'll both print
// 

if (password.length >= 6) {
    if(password.indexOf(' ') == -1) {
        console.log("Goodjob! No space");
    }
    else {
        console.log("Password cannot contain space!")
    }
}
else {
    console.log("Password too short. Must be atleast 6 characters")
}

