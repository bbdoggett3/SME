//Javascript for Solar Calculator"

function addMonths(elem) {
var annualUseKw = 0, dailyUseKw = 0, i = 0, x = 0;
var months = document.getElementById(elem).getElementsByTagName('input');

for(i = 0; i < months.length; i++) {
    x= Number(months[i].value);
    annualUseKw += x
} // end loop
dailyUseKw = annualUseKw/365;
return dailyUseKw;

} //end of function

function sunHours() {
var theZone = document.forms.solarForm.zone.selectedIndex;
theZone +=1;
switch(theZone) {
    case 1:
        hrs = 6;
        break;
    case 2:
        hrs = 5.5;
        break;
    case 3:
        hrs = 5;
        break;
    case 4:
        hrs = 4.5;
        break;
    case 5:
        hrs = 4.2;
        break;
    case 6:
        hrs = 3.5;
        break;
        default:
            hrs=0;
    } //end switch

    return hrs;
} //end of function

function calculatePanel() {
var userChoice = document.forms.solarForm.panel.selectedIndex;
var panelOptions = document.forms.solarForm.panel.options;
var power = panelOptions[userChoice].value;
var name = panelOptions[userChoice].text;
var x = [power, name];
return x;
} //end of function

function calculateSolar() {
    var dailyUseKw = addMonths('mpc');
    console.log(dailyUseKw);

    var sunHoursPerDay = sunHours();
    console.log(sunHoursPerDay);

    var minKwNeeds = dailyUseKw/sunHoursPerDay;
    console.log(minKwNeeds);

    var realKWNeeds = minKwNeeds * 1.25;
    console.log(realKWNeeds);

    var realWattNeeds = realKWNeeds * 1000;
    console.log(realWattNeeds);

    var panelInfo = calculatePanel();
    var panelOutput = panelInfo[0];
    var panelName = panelInfo[1];
    console.log(panelOutput);
    console.log(panelName);

    var panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
    console.log(panelsNeeded);

    //You can create the innerHTML in order to display the numbers to the user.
    var feedback = "";
    feedback += ""
    feedback += ""
    feedback += ""
    feedback += ""
    feedback += ""
    feedback += "" 

    

} //end of function