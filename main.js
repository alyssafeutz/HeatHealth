// JS for the index.html page

const textInput = document.getElementById("textInput");
const textButton = document.getElementById("textButton");
const textOutput = document.getElementById("textOutput");
const emailInput = document.getElementById("emailInput");
const emailButton = document.getElementById("emailButton");

//Weather API
if (textInput) {var temperatureInF = 97}
class Fetch {
    async getCurrent(){
        const myKey = "f1f6c035a39b6452697f42e012796d61";
        const city = textInput.value
         
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`
        );
        const data = await response.json();
        const maxTemp = data.main.temp_max
        console.log(maxTemp)
    }
}
var advice = ""
const char = "@"
const apiCall = new Fetch();
const tempCall = document.getElementById("z")

if (temperatureInF > 94) {
    // anchor tag elements
    var a = document.createElement('a');
    var link = document.createTextNode("Click Here for more Information")
    a.appendChild(link);
    a.title = "Click"
    a.href = "learn.html#tempAbove94"

    advice = " high heat procedures must be enacted.  \n You must set up a communication system and monitor employees for heat illness.  \n You must provide shade and a ten minute break every 2 hours." +
        " \n You must also follow the baseline guidelines and provide one quarter of water for each hour worked.  You must also provide accesss to shade."
} else if (temperatureInF > 80) {
    // anchor tag elements
    var a = document.createElement('a');
    var link = document.createTextNode("Click Here for more Information")
    a.appendChild(link);
    a.title = "Click"
    a.href = "learn.html#tempAbove79"


    advice = "you must monitor employees for heat illness." +
        " \n You must also follow the baseline guidelines and provide one quarter of water for each hour worked.  You must also provide accesss to shade."
} else {

    // anchor tag elements
    var a = document.createElement('a');
    var link = document.createTextNode("Click Here for more Information")
    a.appendChild(link);
    a.title = "Click"
    a.href = "learn.html#allTemperatures"

    advice = "you have no specific heat related guidelines, but you still must provide employees with one quart of potable water for every hour worked and shade."
}

function textFunction() {
    const MEE = new Fetch()
    var ourTemp = ""
    MEE.getCurrent((maxTemp) => {
        ourTemp = maxTemp
        console.log(maxTemp)})
    
    textOutput.innerHTML = "Upload the 'convertedtemp.txt' file to display high temperature in Fahrenheit for " + textInput.value;
        document.body.appendChild(a)
    // <button id="more">Click here</button>
}

function emailFunction() {
    valid = emailInput.value
    if (valid.includes(char) === false) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for signing up for our future email list.  We will email you at " + emailInput.value + " with any updates to our app. You can unsubscribe at any time on our help page");
    }
}


textButton.addEventListener('click', textFunction);
emailButton.addEventListener('click', emailFunction);

// // JS for the help.html page

// const modal = document.querySelector('#modal');
// const openModal = document.querySelector('.open-button');
// const yesModal = document.querySelector('.close-button');
// const noModal = document.querySelector('.no-button');
// openModal.addEventListener('click', () => {
//     modal.showModal();
// })
// yesModal.addEventListener('click', () => {
//     modal.close()
// })
// noModal.addEventListener('click', () => {
//     modal.close()
// })
// function unsubscribeConfirm() {
//     alert("We're sorry to see you go, your email " + " will not receive future emails.")
// }
// yesModal.addEventListener('click', unsubscribeConfirm);



// Future iteration might have a contact button

// const contactInput = document.getElementById("contactInput");
// const contactButton = document.getElementById("contactButton");

// function contactFunction () {
//     alert("Thank you for contacting us.  Your input " + contactInput + " will be shared with us.")
// }
// contactButton.addEventListener('click', contactFunction);
