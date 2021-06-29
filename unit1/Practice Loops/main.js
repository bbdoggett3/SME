
function showStuff(el) {
    let elementID = document.getElementById(el);
    
    for(i = 0; i<elementID.length; i++) {
        if(elementID[i].selected === true) {
            var x = elementID[i].text;           
        } //end of if
    } //end of loop
    return x;
} //end of function

function evaluatePage() {
    var feedbackState = showStuff("state");
    var feedbackHome = showStuff("home");
    document.getElementById('output').innerHTML = feedbackState + "<br>" + feedbackHome;
    
}
