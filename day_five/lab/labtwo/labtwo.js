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

/*
Wild Wild Life
*/
//modify elements in arrays - array order: (name, species, age, hometown)
//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older. 
const plantee = ["Plantee", "plant", 5000, "Mordor"];
plantee.splice(2,1, '5001');
console.log(plantee);

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
wolfy.splice(3,1, 'Gotham City');
console.log(wolfy);

//3. Give D'Art a second hometown by adding "Hawkins"
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
dart.push('Hawkins');
console.log(dart);

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. 
//Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0,1, 'Gameboy');
console.log(wolfy);

