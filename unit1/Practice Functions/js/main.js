//Javascript Document
function floor(diameter) {
    let radius = diameter/2;
    let floorArea = Math.PI * (radius * radius);

    return floorArea;
} //end of function

function walls(diameter, height) {
    let radius = diameter/2;
    let circumference = 2 * Math.PI * radius;
    let wallArea = circumference * height;

    return wallArea;
} //end of function

function materialsNeeded() {
    //Grab the user input by the ID and store those values here
    let d = document.getElementById('across').value;
    let h = document.getElementById('height').value;

    //Create variables to round the values up for a room.
    let carpetNeeded = Math.ceil(floor(d));
    let paintNeeded = Math.ceil(walls(d, h));

    //Use template literal to give some user feedback on the materials needed.
    console.log(`Carpet needed is ${carpetNeeded} sqft`);
    console.log(`Paint needed is ${paintNeeded} sqft`);


} //end of function

