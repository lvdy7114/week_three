/*
Easy Going 
*/
//write a loop that will log the numbers 1 through 20. 
for (let i = 1; i <= 20; i ++) {
    console.log(i);
}

/*
Get Even
*/
//Write a for loop that will log only the even numbers in 0 through 200
for(let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*
FizzBuzz
*/
//fizzbuzz problem from 1 - 100
for (let i = 1; i <= 100; i++ ) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");

    }
    else if ( i % 5 === 0 ) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}