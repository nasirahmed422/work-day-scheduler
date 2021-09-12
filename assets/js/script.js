//This will get the current date and append it to the element with currentDay ID. 
var currentDay = moment();
var displayDate = moment(currentDay).format("dddd MMMM Do");
$("#currentDay").text(displayDate);

//These identify the text boxes and will help change the color.
var nineAM = document.querySelector('#nineAM');
var tenAM = document.querySelector("#tenAM");
var elevenAM = document.querySelector("#elevenAM");
var twelvePM = document.querySelector("#twelvePM");
var onePM = document.querySelector("#onePM");
var twoPM = document.querySelector("#twoPM");
var threePM = document.querySelector("#threePM");
var fourPM = document.querySelector("#fourPM");
var fivePM = document.querySelector("#fivePM");

//This is the function that will change colors based on past, present, and future. 
function textBlockColor(timeBoxElement, bTime, aTime) {
    var format = 'hh:mm:ss'

    // var time = moment() gives you current time. no format required.
    var currentTime = moment();
    var beforeTime = moment(bTime, format);
    var afterTime = moment(aTime, format);

    if (currentTime.isBetween(beforeTime, afterTime)) {
        $(timeBoxElement).addClass("present");
    }
    else if (currentTime.isBefore(beforeTime)) {
        $(timeBoxElement).addClass("future");
    }
    else if (currentTime.isAfter(afterTime)) {
        $(timeBoxElement).addClass("past");
        //Added this line because you shouldnt schedule something in the past.
        $(timeBoxElement).attr('disabled', '');
    }
}
//The following will run to change the box colors. 
//I would've put this in a loop but there aren't that many.
textBlockColor(nineAM, '09:00:00', '10:00:00');
textBlockColor(tenAM, '10:00:00', '11:00:00');
textBlockColor(elevenAM, '11:00:00', '12:00:00');
textBlockColor(twelvePM, '12:00:00', '13:00:00');
textBlockColor(onePM, '13:00:00', '14:00:00');
textBlockColor(twoPM, '14:00:00', '15:00:00');
textBlockColor(threePM, '15:00:00', '16:00:00');
textBlockColor(fourPM, '16:00:00', '17:00:00');
textBlockColor(fivePM, '17:00:00', '18:00:00');