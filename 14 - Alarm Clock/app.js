// selecting all required elements
const currentTime = document.querySelector("h1");
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("button");
 
// Global variables
// declaring alarmTime variable and isAlarmSet to false
// ringtone is an Audio object that plays the ringtone.mp3 file

let alarmTime;
let isAlarmSet = false;
const ringtone = new Audio("./files/ringtone.mp3");


for (let hour = 12; hour > 0; hour--) {
    hour = hour < 10 ? `0${hour}` : hour;                                              // If hour is less than 10, add a leading zero
    let option = `<option value="${hour}">${hour}</option>`;                          // Create <option> tag with the hour 
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);          // Insert the option after the first child of selectMenu[0]
}

for (let min = 59; min >= 0; min--) {
    min = min < 10 ? `0${min}` : min;                                                  // If min is less than 10, add a leading zero
    let option = `<option value="${min}">${min}</option>`;                            // Create <option> tag with the minutes
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);           // Insert the option after the first child of selectMenu[1]
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";                                                  // If i is 1, set ampm to "AM", else set it to "PM"
    let option = `<option value="${ampm}">${ampm}</option>`;                         // Create <option> tag with the ampm value
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);          // Insert the option after the first child of selectMenu[2]
}

setInterval(() => {
    let date = new Date(),                // Get current date and time
        hours = date.getHours(),          // Get hours (0–23)
        minutes = date.getMinutes(),      // Get minutes (0–59)
        seconds = date.getSeconds(),      // Get seconds (0–23)
        ampm = "AM";                      // Default AM/PM

    if (hours >= 12) {
        hours = hours - 12;               // Convert 24hr to 12hr
        ampm = "PM";                      // Set PM if hours >= 12
    }

    // ternary operator is a shortened version of an if-else statement.
    // (condition ? true : false)
    // condition ? value_if_true : value_if_false;
    // If hours is 0, set it to 12 (12 AM)
    hours = hours == 0 ? hours = 12 : hours;

    // If hours, minutes, or seconds are less than 10, add a leading zero
    // to make them two digits (e.g., 01, 02, etc.)
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    /// Show current time in the format "hh:mm:ss AM/PM"
    currentTime.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Get the current time in the format "hh:mm AM/PM"
    // alarmTime = `${hours}:${minutes} ${ampm}`;
    // Check if the alarmTime is set and matches the current time
    // If it matches, play the ringtone and set it to loop
    if (alarmTime === `${hours}:${minutes} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";                          // Reset alarm time
        ringtone.pause();                        // Stop the ringtone if it's playing
        content.classList.remove("disable");     // Re-enable the content section
        setAlarmBtn.innerText = "Set Alarm";     // Change button text back to "Set Alarm"
        return isAlarmSet = false;               // Reset the isAlarmSet flag to false
    }

    // Get the selected time from the dropdown menus
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

    // Check if any part of the time string contains the default values (like "Hour", "Minute", or "AM/PM")
    // This means the user hasn't selected a valid time yet
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        // Show an alert if the user hasn't selected a valid time
        return alert("Please, select a valid time to set Alarm!");
    }

    alarmTime = time;                          // Store the selected time as the alarm time
    isAlarmSet = true;                         // Set the alarm as active
    content.classList.add("disable");          // Disable the content section while the alarm is active
    setAlarmBtn.innerText = "Clear Alarm";     // Change button text to "Clear Alarm"
}

setAlarmBtn.addEventListener("click", setAlarm);