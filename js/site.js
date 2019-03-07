/* this is site js */

function getFleet() {

    var fleet = [

        { mf: "Ford", colour: "Red", engine: "1.2" },
        { mf: "Fiat", colour: "Blue", engine: "1.4" },
        { mf: "Nissan", colour: "Yellow", engine: "1.6" },
        { mf: "Opel", colour: "Pink", engine: "1.8" },
        { mf: "Porsche", colour: "Flourescent Orange", engine: "8.8" },
        { mf: "Honda", colour: "Pink", engine: "0.3" },
    ]

    return fleet;

}


function loadJson() {

    console.log("I am json")
    /*
        var carMF1 = "Ford";
        var carEngine1 = "1.2";
        var carColour1 = "Red";
    
        var carMF2 = "Nissan";
        var carEngine2 = "1.2";
        var carColour2 = "Reddish";
    
        var carMF3 = "Fiat";
        var carEngine3 = "1.2";
        var carColour3 = "Redder";
    
        */


    var car1 = {}
    car1.mf = "ford";
    car1.colour = "red";
    car1.engine = "1.2";

    var car2 = {}
    car2.mf = "fiat";
    car2.colour = "redder";
    car2.engine = "1.23";



    var fleet = getFleet();
    document.getElementById('carMF').innerHTML = fleet[1].mf;
    document.getElementById('carEng').innerHTML = fleet[1].engine;
    document.getElementById('carColour').innerHTML = fleet[1].colour;



    var htmlString = [];
    htmlString.push("<table border='1'>");
    htmlString.push("<tbody id='fleet'>");
    htmlString.push("<tr>");
    htmlString.push("<td>MF</td><td>Colour</td><td>Engine</td>");


    htmlString.push("</tr>");
    for (var i = 0; i < fleet.length; i++) {

        console.log("The current car is " + fleet[i].mf + " [" + i + "]");
        if (i+1 < fleet.length) {
         
            console.log("---------The next car is " + fleet[i + 1].mf);
        }

        var currentCar = fleet[i];

        
        htmlString.push("<tr>");
        htmlString.push("<td>");
        htmlString.push(currentCar.mf);
        htmlString.push("</td>");

        htmlString.push("<td>");
        htmlString.push(currentCar.colour);
        htmlString.push("</td>");

        htmlString.push("<td>");
        htmlString.push(currentCar.engine);
        htmlString.push("</td>");

        htmlString.push("</tr>");




    }
    htmlString.push("</tbody>");
    htmlString.push("</table>");

    document.getElementById("outputPanel").innerHTML = htmlString.join(" ");


var fleetString = fleet.map( obj => {

    return obj.colour;

})

console.log(fleetString);

var fleetString2 = fleet.map( obj => {

    return `<tr><td>${obj.mf}</td><td>${obj.engine}</td><td>${obj.colour}</td></tr>`;

})

console.log(fleetString2);
document.getElementById('fleet').innerHTML = fleetString2.join(" ");

//https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
var fleetString3 = fleet.map( obj => {
console.log("-----------------------");
    for(var key in obj) {

        console.log(key + " -> " + obj[key]);
    }
    return obj;

})


}