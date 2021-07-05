"use strict"

// function randomDestination(randomCity){
//     let selectedCity;
//     if(randomCity === Tokyo){
//         selectedCity = "You are going to Tokyo!";
//     }
//     else if(randomCity === Shibuya){
//         selectedCity = "You are going to Shibuya!";
//     }
//     else{ randomCity ===  Toronto
//         selectedCity = "You are going to Toronto!";
//     }
//     return selectedCity;
// }

let destinationArray = ['Tokyo', 'Shibuya', 'Toronto', 'New York', 'Kyoto'];
let restaurantArray = ['Outback', 'Pizza Nova', 'Five Guys', 'KFC', 'Red Lobster'];
let transportationArray = ['Fly', 'Uber', 'Train', 'Cruise', 'Bike'];
let entertainmentArray = ['Movies', 'Skydiving', 'Biking', 'Amusement Park', 'Snorkling'];

function randomElementFromArray(array){
    let randomDecimalNumber = Math.random() * array.length 
    let randomInteger = Math.floor(randomDecimalNumber) 
    let elementFromArray = (array[randomInteger])
    console.log(elementFromArray)
}
randomElementFromArray(destinationArray)
randomElementFromArray(restaurantArray)
randomElementFromArray(transportationArray)
randomElementFromArray(entertainmentArray)

function newSelection(array){
    
}





// function randomRestaurant(randomEats){
//     let selectedRestaurant;
//     if(randomEats === OutbackSteakhouse){
//         selectedRestaurant = "You are eating at Outback Steakhouse tonight!";
//     }
//     else if(randomEats === PizzaNova){
//         selectedRestaurant = "You are eating at Pizza Nova tonight!";
//     }
//     else { randomEats === FiveGuys
//         selectedRestaurant = "You are eating at Five Guys tonight!";
//     }
//     return selectedRestaurant;
// }

// function randomModeOfTransport(randomTransit){
//     let selectedTransportation;
//     if(randomTransit === Flight){
//         selectedTransportation = "You are flying to your destination!";
//     }
//     else if(randomTransit === Uber){
//         selectedTransportation = "You are taking an Uber to your destination!";
//     }
//     else{randomTransit === Train 
//         selectedTransportation = "You are taking the train to your destination!";
//     }
//     return selectedTransportation;
// }

// function randomEntertainment(randomFun){
//     let selectedEntertainment;
//     if(randomFun === Movies){
//         selectedEntertainment = "You are going to the movies!";
//     }
//     else if(randomFun === Skydiving){
//         selectedEntertainment = "You are going skydiving!";
//     }
//     else{randomFun === Biking
//         selectedEntertainment = "You are going biking!";
//     }
//     return selectedEntertainment;
// }