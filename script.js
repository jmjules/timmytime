const d = new Date();
const WEEKDAYS = [".sunday", ".monday", ".tuesday", ".wednesday", ".thursday", ".friday", ".saturday"];
let dayTracker;
let daySelectMenu = document.getElementById("daySelectMenu");



window.onload = function () {

    let daySelector = 4;//d.getDay(); //for testing put: "3" = wednesday;
    // let todaysInput = "option[value='" + daySelector + "']";
    let today = document.querySelectorAll(WEEKDAYS[daySelector]);//all elements of the current day

    //update dayTracker with current day
    dayTracker = daySelector;

    //preselect todays button
    let todaysButton = document.querySelector("#d" + daySelector);
    todaysButton.classList.toggle("button_clicked")
    todaysButton.classList.toggle("button_today")

    //let today *glow*
    for (let i = 0; i < today.length; i++) {
        today[i].classList.add("today");
        today[i].classList.add("block");
    }


    updateTime();

}

function updateTime() {

    let currentTime = d.getHours() + d.getMinutes() / 60; //to test put time in decimal format
    let timeSlots = [8.75, 9.5, 10.6, 11.34, 12.25, 13, 14.75, 15.5, 16.42, 17.17, 18.084, 18.84];

    for (let n = 0; n < timeSlots.length; n++) {
        if (currentTime <= timeSlots[n] && currentTime >= 8) {
            let timebox = document.querySelector("#t" + n);

            timebox.classList.toggle("currentTime");
            return;
        }
        
    }
}

function dropTheDays(buttonValue) {

    let oldElems = document.querySelectorAll(".block");
    for (let i = 0; i < oldElems.length; i++) {
        oldElems[i].classList.toggle("block");
    }


    let newValue = WEEKDAYS[buttonValue];
    let newDisplayElems = document.querySelectorAll(newValue);

    for (let i = 0; i < newDisplayElems.length; i++) {
        newDisplayElems[i].classList.add("block");
    }


    let oldClickedButton = document.querySelector(".button_clicked");
     oldClickedButton ? oldClickedButton.classList.toggle("button_clicked") : null;
    
    let clickedButton = document.querySelector("#d" + buttonValue);
    clickedButton.classList.toggle("button_clicked")
    

    updateTime();

}