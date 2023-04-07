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
    let timePercentage = (currentTime - 8) / 10.8;
    console.log(currentTime);
    console.log(timePercentage);

    let tableElem = document.querySelector(".wrapper");
    let tableDimensions = tableElem.getBoundingClientRect();
    let styles = getComputedStyle(tableElem);
    let elemHeight = tableDimensions.height - parseInt(styles.paddingBlock);

    let tableY = tableDimensions.y;          //minimum
    let displayHeight = elemHeight + parseInt(styles.paddingTop);   //maximum
    let line = document.querySelector(".timeLine");
    let offset;

    if(currentTime < 8){
        offset = 0 + parseInt(styles.paddingTop) + elemHeight/14;
    }else if(currentTime > 18.8){
        offset = elemHeight;
    }else{
        offset = timePercentage * elemHeight + parseInt(styles.paddingTop);
    }

    line.style.top = tableY + offset + "px";
    console.log(tableDimensions);
    console.log(displayHeight);
    console.log(elemHeight);
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