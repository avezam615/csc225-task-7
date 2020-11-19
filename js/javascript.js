function reverseThisString(string){
    //use split("") to turn string into an array of characters and reverse it.
    return string.split().reverse().join("");
}
console.log(reverseThisString("Hello"));

function swapCase(string){

    str = string.split("") //Convert to array
    length = str.length;
    for (let x = 0; x < length; x++){
        if(str[x] == str[x].toLowerCase()){ //Check for LowerCase
            str[x] = str[x].toUpperCase(); //Convert element to Uppercase
        }else{
            str[x] = str[x].toLowerCase();
        }
    }
    str = str.join(""); //Convert back to a string
    return str;
}
console.log(swapCase("Hello World"));

function toCelcius(array){
//array.map is creating a new array using the elements in the array it is called on.
    const celcius = array.map(value => (value-32)*5/9);
    return celcius;
}
console.log(toCelcius([23, 32 ,41, 50, 59]))

function passOrFail(array){
    const boolGrades = array.map(function(value){
        if(value >= 75)
            return true;
        else{
            return false;
        }
    });
    return boolGrades;
}
console.log(passOrFail([20, 30, 50, 80, 90, 100]));

function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei','drei','vier','funf','sechs']

    const arr = cardinalNumbers.map(function(value){
        for(let i = 0; i < cardinalNumbers.length; i++){
            return value + " is " + germanNumbers[i];
        }
    })
    return arr;
}
console.log(germanNumbers());

function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let count = 0;
    const primes = numbers.filter(function(value){
    for(let i = 2; i <= value; i++){
        if(value % i == 0){ //does not handle 2, 9
            break;
        }else{
            return value;
        }
    }
    });
    return primes;
}
console.log(returnPrimeNumbers());

function changeValues(){
    const str1 = "CSC225 RULES";
    const str2 = "I LOVE JAVASCRIPT";

    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){ //First check for numbers that are multiples of 3 and 5
            console.log(str1 + " " + str2);
        }else if(i % 3 === 0){
            console.log(str1);
        }else if(i % 5 === 0){
            console.log(str2);
        }
        else console.log(i);
    }
}
changeValues();