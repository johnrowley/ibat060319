/* this is site js */

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
    car1.mf ="ford";
    car1.colour="red";
    car1.engine="1.2";

    var car2 = {}
    car2.mf ="fiat";
    car2.colour="redder";
    car2.engine="1.23";

    var fleet = [

        {mf: "Ford", colour:"Red", engine:"1.2"},
        {mf: "Fiat", colour:"Yello1", engine:"1.4"}
    ]


    document.getElementById('carMF').innerHTML=fleet[1].mf;
    document.getElementById('carEng').innerHTML=fleet[1].engine;
    document.getElementById('carColour').innerHTML=fleet[1].colour;

}