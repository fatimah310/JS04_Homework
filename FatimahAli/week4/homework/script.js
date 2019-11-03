console.log("JS connected"); // this to check that our script is connected to out HTML
// query select body 
var body = "document.querySelector('body')";

// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
document.body.style.fontFamily = "Arial, sans-serif";

// change the backgroundColor to a color of your choice
document.body.style.backgroundColor = "#442190";


// qurey select the ID nickname
var nickname =  "document.querySelector('nickname')";
//add some value to nickname Hint: innerHTML
document.getElementById("nickname").innerHTML = " Fatimah";

// query select favorites byID
var favorites =  "document.querySelector('favorites')";

// query select hometown byID
var hometown =  "document.querySelector('hometown')";
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';
document.getElementById("favorites").innerHTML = " readding";
document.getElementById("hometown").innerHTML = " Riyadh";

//change the color of all selectors to colors of your choice, it better be good LOL
document.getElementById("nickname").style.color = "#ff7700";
document.getElementById("favorites").style.color = "#9900fa";
document.getElementById("hometown").style.color = "#00ff00";


// https://www.w3schools.com/jsref/prop_style_color.asp