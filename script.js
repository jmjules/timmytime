const d = new Date();
const WEEKDAYS = [".sunday", ".monday", ".tuesday", ".wednesday", ".thursday", ".friday", ".saturday"];
let dayTracker;
let daySelectMenu = document.getElementById("daySelectMenu");

window.onload = function () {
    let daySelector = d.getDay(); //for testing put: "3";
    // let todaysInput = "option[value='" + daySelector + "']";
    let today = document.querySelectorAll(WEEKDAYS[daySelector]);//all elements of the current day

    //update dayTracker with current day
    dayTracker = daySelector;

    //change input field
    //document.querySelector(todaysInput).setAttribute("selected", ""); //idk if this even works
    //gibts ned mehr
    // daySelectMenu.value = dayTracker;

    //let today *glow*
    for (let i = 0; i < today.length; i++) {
        today[i].classList.add("today");
        today[i].classList.add("block");
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


}

function windTheTime(direction) {

    if (direction === "backwards") {
        if (dayTracker > 1) {
            dayTracker--;
        } else {
            dayTracker = 5;
        }
    } else if (direction === "forwards") {
        if (dayTracker < 5) {
            dayTracker++;
        } else {
            dayTracker = 1;
        }
    }


    daySelectMenu.value = dayTracker;
    dropTheDays();
}