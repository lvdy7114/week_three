
//practice
/*for (let i = 0; i < 10; i++) {
    console.log(i);
} */

//countdown from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//output odd and even numbers from 1 to 10
for (let x = 0; x <=10; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
else if (x % 2 === 0) {
    console.log (x + " is even")
}
else {
    console.log(x + " is odd");
}
}

//output multiples of 3, starting at 6 and ending at 60
for (let j = 6; j <= 60; j++) {
    if(j % 3 == 0) {
        console.log(j);
    }
}

//output an increasing number of # symbols, from 1 to 7
for (let z = 1; z <= 7; z++) {
    if(z === 1) {
        console.log("#");
    }
    else if( z === 2) {
        console.log("##");
    }
    else if( z === 3) {
        console.log("###");
    }
    else if( z === 4) {
        console.log("####");
    }
    else if( z === 5) {
        console.log("#####");
    }
    else if( z === 6) {
        console.log("######");
    }
    else if( z === 7) {
        console.log("#######");
    }

}

//while loop exercise. countdown to 0 from any given number
let a = 10;
while (a >= 1 ) {
    a--;
    console.log(a);
}

//while loop. log integers in multiples of 3, as long as less than 35
let b = 3; 
while (b < 35) {
    b++;
    if(b % 3 == 0)
    console.log(b);

}

//while loop. print int in multiples of 5, less than 100
let c = 5;
while (c < 100) {
    c++;
    if(c % 5 == 0)
    console.log(c);
}

//while loop. print int between 0 and 20 w/ following conditions:
//all #'s divisble by 2 should multiply by 3 before the output
//all other int should not be output

let d = 0;
while (d < 20) {
    d++;
    if(d % 2 == 0)
    console.log(d * 3);
}

//bonus
let cost = 4;
let bill = 10;
let change = bill - cost;
let quarters = 0;

while (change >= 0.25) {
    change -= 0.25;
    quarters++;
}
console.log("Quarters received: ", quarters);

//reverse a string. reverse a string using a for loop(no using .reverse())
let word = "pal";
let newWord = ' ';

for (let i = word.length -1; i >= 0; i--) {
   newWord += word[i];
}

console.log(newWord)


// Write a for loop that calculates and prints the sum of all numbers from 1 to 100.
for (let loop = 0; loop < 100; loop++) {
    console.log(loop + 1);
}


//Write a for loop that prints the multiplication table for a given number(you can set your condition to stop at 10)
const num = 5;

for (let m = 1; m <= 10; m++) {
    
    //multiply
    const result = m * num;

    //display
    console.log(`${num} * ${m} = ${result}`);
}

