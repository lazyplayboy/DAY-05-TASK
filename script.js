//Get all the countries from the Asia continent /region using the Filter function
let request = new XMLHttpRequest();
request.open("GET", 'https://restcountries.com/v3.1/all');
request.send();
request.onload = function() {
  let data = JSON.parse(this.response);
 let result = data.filter((element) => {
 if(element.region == "Asia"){
 return element.name
 }
 })
 console.log(result)
}
//Get all the countries with a population of less than 2 lakhs using Filter function
let request = new XMLHttpRequest();
request.open("GET", 'https://restcountries.com/v3.1/all');
request.send();
request.onload = function() {
 let data = JSON.parse(this.response);
 let result = data.filter((element) => {
 return element.population < 200000;
 
 })
 console.log(result)
}
//Print the following details name, capital, flag using forEach function
let request = new XMLHttpRequest();
request.open("GET", 'https://restcountries.com/v3.1/all');
request.send();
request.onload = function() {
 let data = JSON.parse(this.response);
 data.forEach((element) =>{
 console.log(element.name,element.capital,element.flag)
 })
 }
 //Print the total population of countries using reduce function
 let request = new XMLHttpRequest();
 request.open("GET", 'https://restcountries.com/v3.1/all');
 request.send();
 request.onload = function() {
  let data = JSON.parse(this.response);
  let result = data.reduce((accumulator,element) =>{
  return accumulator+element.population;
  },0)
  console.log(result)
}
//Print the country which uses US Dollars as currency.
