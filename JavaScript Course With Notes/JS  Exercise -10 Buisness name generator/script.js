// const randomIndex = Math.floor(Math.random() * 3) + 1;
// const randomMid = Math.floor(Math.random() * 3) + 1;
// const randomEnd = Math.floor(Math.random() * 3) + 1;
// console.log(randomIndex)
// if(randomIndex == 1 && randomMid ==1 && randomEnd == 1){
//     console.log("Crazy Engine Bros")
// }
// else if(randomIndex == 2 && randomMid ==2 && randomEnd == 2){
//     console.log("Amazing Foods Limited")
// }else if (randomIndex == 3 && randomMid ==3 && randomEnd == 3){
//     console.log("Fire Garments Hub")
// }
/* 
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let rand = Math.random()
let first, second, third;
// 0 0.33 0.66 1


// Lets generate the first word
if(rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}

// Lets generate the second word
rand = Math.random()
if(rand<0.33){
    second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}

// Lets generate the third word
rand = Math.random()
if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)