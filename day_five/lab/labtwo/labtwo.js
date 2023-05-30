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

/*
Yell at the Ninja Turtles
*/
//Capitalize letters in array 
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for(let t = 0; t < ninjaTurtles.length; t++) {
    ninjaTurtles[t] = ninjaTurtles[t].toUpperCase();
    console.log(ninjaTurtles[t]);
}

/*
Methods Revisted
*/
//Do the following and console.log the final results. 
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 
'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 
'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 
'Snatch', 'Fast and Furious'];

//Console log the index of Titanic.  
let titanicIndex = favMovies.indexOf('Titanic');
console.log(titanicIndex);

//1. Use the .sort method.
favMovies.sort();
console.log(favMovies);

//2. Thought Question: What did this do to the array? 
//It sorted in alphabetical order.  
console.log(favMovies);
//Did it permanently alter it? Yes it did. 

//3. Use the method pop.
favMovies.pop();
console.log(favMovies);
//Removes Volver from the list

//4. push "Guardians of the Galaxy".
favMovies.push('Guardians of the Galaxy');
console.log(favMovies);
//adds Guardians of the Galaxy at the end of array

//5. Reverse the array.
favMovies.reverse();
console.log(favMovies);

//6. Use the shift method.
favMovies.shift();
console.log(favMovies);
//Removes Guardians of the Galaxy since it is first on the list

//7. unshift - what does it return?
favMovies.unshift();
console.log(favMovies);
//It returns the same list.  Purpose of unshift is to add to the front of the array. In this case, I didn't add anything. 

//8. splice "Django Unchained" and add "Avatar" 
//(try finding the index of "Django Unchained" instead of counting it yourself).
let djangoUnchainedIndex = favMovies.indexOf('Django Unchained');
console.log(djangoUnchainedIndex);
//at 14 index
favMovies.splice(14,1, 'Avatar');
console.log(favMovies);

//9. Thought Question: Did this permanently alter our array?
console.log(favMovies);
//Yes

//10. slice the last half of the array. 
//(Challenge yourself and try to programatically determine the middle of the array rather than counting it 
//and hard coding it.)
const theMiddle = Math.floor(favMovies.length / 2);
const middleValue = favMovies[theMiddle];
console.log(middleValue);

let howlsMovingCastleIndex = favMovies.indexOf('Howl\'s Moving Castle');
console.log(howlsMovingCastleIndex);
//Howl's Moving Castle is at index 9. 


let blackPantherIndex = favMovies.indexOf('Black Panther');
console.log(blackPantherIndex);
//black panther index at 17

let middleMovies = favMovies.slice(9,18);
console.log(middleMovies);    

//Thought Question: Did this permanently alter our array?
console.log(favMovies);
//No. because I set a variable of middleMovies to slice and show from the list Howl's Moving Castle to Black Panther

//Store the value of your slice in a variable and console.log it.
let sliceMovies = middleMovies;
console.log(sliceMovies);

//13. Thought Question: What is going on here?
//I re-assigned the sliceMovies variable of the slice method and put it in console.log of that variable.  

//14. console.log your final results.
console.log(favMovies);
/* 
[
  'Toy Story',
  'Titanic',
  'The Usual Suspects',
  'The Fellowship of the Ring',
  'Snatch',
  'Seven',
  'Oculus',
  'Jaws',
  'Imitation of Life',
  "Howl's Moving Castle",
  'Harry Potter',
  'Harry Potter',
  'Fried Green Tomatoes',
  'Fast and Furious',
  'Avatar',
  'Conan the Barbarian',
  'Cloud Atlas',
  'Black Panther'
]
*/
//After running the above tasks, console.log the index of "Fast and Furious."
favMovies.splice(13,1);
console.log(favMovies);

let fastAndFuriousIndex = favMovies.indexOf('Fast and Furious');
console.log(fastAndFuriousIndex);
//We removed it from the array. 
//What value do we get when we look for the index of something that is not in the array?
//Get a value of -1
//Thought Question: We declared the variable favMovies with const, and yet we were allowed to change the array. Weird? 
//Should we have used let?
//No. Things can change in the array, but can't be re-assigned. It defines a constant reference to an array, so elements
//of a constant array can change. 

/*
Where is Waldo
*/
//multi-dimensional array:
//Remove Eggbert (hint look at the slice/splice methods).
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];

console.log(whereIsWaldo.indexOf('Eggbert'));
//index of 1

whereIsWaldo.splice(1,1,1);
console.log(whereIsWaldo);
//Eggbert removed. 

//Change "Neff" to "No One".
whereIsWaldo.splice(1,2,1, ['Lucinda', 'Jacc', 'No One', 'Snoop']);
console.log(whereIsWaldo);

//Access and console.log "Waldo".
console.log(whereIsWaldo[3][1][1]);

/*
Excited Kitten
*/
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//2. For every even number in your loop, log "...human... why you taking pictures of me...?", 
//"...the catnip made me do it...", or "...why does the red dot always get away...?" at random.

let randomSayings = ['...human... why you taking pictures of me...?', '...the catnip made me do it...',
'...why does the red dot always get away...?']

for (let counter = 1; counter <= 20; counter++) {
    if (counter % 2 === 0) {
        console.log(randomSayings[(Math.floor(Math.random() * randomSayings.length))]);
    }
    else {
        
        console.log("Love me, pet me! HSSSSSS!");
    }
}

/*
Find the Median
*/
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// Expected output: 15

nums.sort();
const findMedian = Math.floor(nums.length / 2);
const midPoint = nums[findMedian];
console.log(midPoint);

/*
Hungry For More - optional
*/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
//alien attire - Remove Kristyn's shoe from the array and save it to the variable kristynsShoe.
  let kristynsShoe = kristynsCloset.splice(0,1);
  console.log(kristynsShoe);
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //Use that variable to add Kristyn's lost shoe to Thom's accessories array.
console.log(thomsCloset[2][0]); //wool mittens, which is in accessories array
console.log(thomsCloset[2]); //displays accessories array
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset[2]);
  
