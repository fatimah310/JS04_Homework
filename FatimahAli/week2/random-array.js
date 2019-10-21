/*
Write a script that can generate random addresses
Your script should randomly select one item from each of these arrays and then use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. 
For example: 34578 Dolphin Street, Wonka NY, 44506 (
node random-address.js

*/
streetNumberArray =[2 , 34, 56,77,88,92,10,201,510];
streetNameArray=['streetA','streetB','Street C','StreetD','StreetE'];
cityNameArray=['Abha','Dammam','Riyadh','Tabuk','Makkah'];
stateNameArray=['North','Ester','West','Middle','South'];
zipCodeArray=[27292,63656,31323,53535,74757,88764];
var e = Math.floor(Math.random() * 5);

console.log(streetNumberArray[e] + ' ' + streetNameArray[e] +' ,' + cityNameArray[e] + ' '+
 stateNameArray[e]+', ' + zipCodeArray[e])
