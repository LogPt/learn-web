


//function main(){
var radius= prompt("Please enter the number of strings you wanna have in the page!", "from 0 to 300 please", );  // Entering the meaning of variable 
var pi=3.14;
var S=pi*radius**2;

// String //
if(radius <0){
    alert("You're crazy, man?!\n " + radius + " is negative munber! \n  Reload the page and try again!")
}
else if(radius > 10){
    var doOrNot= confirm("Really wanna fill the page by "+ radius + " strings?")
    if (doOrNot == true) {
        fillPage (radius, S);
        fillConsole (radius, S);
    }
    else if(doOrNot != true){
        alert("We didn't fill the page by "+ radius + " strings!")
    }
}
else {
    fillPage (radius, S);
    fillConsole (radius, S);
}
//}

function fillConsole(radius, S){
console.log(S);
var number = S;
number*=6;
console.log("number = " + number);
number/=2;
console.log("half of number " + number + " = " + number);
number**=2;
console.log("number " + number + " in the second degree  = " + number);

var flagAND = (number>0 ) && (pi > 0) && (S>0);
console.log("flagAND = "+ flagAND);  // AND
var flagOR = (number>0 ) || (pi < 0) || (s>0);
console.log("flagOR = "+ flagOR );  // OR
var flagNOT = !(number<0);
console.log("flagNOT = "+ flagNOT);  // NOT
messageText = ( S>9) ? "Surfacesquare is enough": "Not  enough!";
console.log(messageText);

if (S > 13) {
    alert("The END is near!");
}
else {
    alert("The END is not near!");
}

switch (S) {
    case 12.56:
    console.log("S = " + S)
    break;
    case 9.25: 
    console.log("S = " + S)
    break;
}
}
        
function fillPage(radius, S) {
var phrase1 = "The square of surface is  ";
var phrase2 = " units";
for (i=1; i<=radius; i++) {
    document.write("String # " + i + ":" + phrase1 + S + phrase2 + "<br />");
}
}

//    alert("Don't press OK button! \n You'll kill the world!")