//function main(){
var radius = prompt("Please enter the number of strings you wanna have in the page!", "from 0 to 300 please",);  // Entering the meaning of variable 

// console.log(typeof (radius) );



if (radius != null) {
    console.log(radius * 1);
    console.log(Number(radius));

    if (Number(radius) != NaN) {

        var PI = 3.14;
        var S = PI * radius ** 2;

        // String //
        if (radius < 0) {
            alert("You crazy, man?!\n " + radius + " is negative munber! \n  Reload the page and try again!");
        }
        else if (radius > 10) {
            let doOrNot = confirm("Really wanna fill the page by " + radius + " strings?");
            if (doOrNot == true) {
                fillPage(radius, S);
                fillConsole(radius, S);
            }
            else if (doOrNot != true) {
                alert("We didn't fill the page by " + radius + " strings!");
            }
        }
        else if (radius > 0 && radius < 10) {
            fillPage(radius, S);
            fillConsole(radius, S);
        }

    }

    else if (boolean(Number(radius)) != true) {
        //else { 
        alert("You should enter a number, not symbols or string \n Tray again!");
    }
}
else {
    alert("You couldn't escape so easy!");
    document.write('Program Terminated');
}


function fillConsole(radius, S) { //radius, S
    console.log(S);
    let number = S;
    number *= 6;
    console.log("number = " + number);
    number /= 2;
    console.log("half of number " + number + " = " + number);
    number **= 2;
    console.log("number " + number + " in the second degree  = " + number);

    let flagAND = (number > 0) && (PI > 0) && (S > 0);
    console.log("flagAND = " + flagAND);  // AND
    let flagOR = (number > 0) || (PI < 0) || (s > 0);
    console.log("flagOR = " + flagOR);  // OR
    let flagNOT = !(number < 0);
    console.log("flagNOT = " + flagNOT);  // NOT
    messageText = (S > 9) ? "Surfacesquare is enough" : "Not  enough!";
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

function fillPage(radius1, S1) {  // radius, S
    // let radius1 = radius1
    // let S1 = S1
    let phrase1 = ["String # ", ": The square of surface is  "];
    let phrase2 = [" units", "<br />"];
    let partsTxt = phrase1.concat(phrase2);
    for (i = 1; i <= radius1; i++) {
        document.write(partsTxt[0] + i + partsTxt[1] + S1 + partsTxt[2] + partsTxt[3]);
    }
}