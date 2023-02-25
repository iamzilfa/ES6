// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
//     name = name.toUpperCase();
//     return `${name} has ${name.length} characters in their name`;
// });

// console.log(upperizedNames);

/********************************************** */

// const colors = ['red', 'green', 'yellow', 'blue', 'magenta'];

// const crazyColors = colors.map( color => {
//     const jumble = color.split('').reverse();
//     return jumble.join('')+'!';
// });

// console.log(crazyColors);

/****************************************************************************************  */

// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);

// console.log(...squares);


/******************************************************************************************/

// function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
//     return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
//   }
//   console.log(houseDescriptor(['green',['white','gray','black']]));

/*****************************************************************************************/

// function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
//     return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
//   }


/***************************************************************************************** */

// function createSundae({scoops = 1, toppings = ['Hot Fudge']}){
//     const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//     return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings`;
// }

// console.log(createSundae({scoops: 2}));

/***************************************************************************************** */

let basic = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};

//your code goes here

let total = Object.assign({}, basic, advanced);


for(let ex in total) {
    console.log(total[ex])
};

console.log(total);