//setting the date and time using moment.min.js
var currentDay = moment().format('MMMM Do YYYY');
document.querySelector("#currentDay").innerHTML = (`${currentDay}`);
console.log(currentDay);

var currentHr = moment().format('HH');

//setting date and time using moment.min.js
var currentDay = moment().format('MMMM Do YYYY');
document.querySelector("#currentDay").innerHTML = (`${currentDay}`);
console.log(currentDay);

var currentHr = moment().format('HH');
console.log(currentHr);
//create an array with all the hrs inculded
var blockHr = document.querySelectorAll(".time-block")
//running a for loop to compare the current hr to the listed hr
for( i=0; i < blockHr.length; i++ ){
blockHr.textContent = i
console.log(blockHr.textContent)
//if the current hr is less than the listed hr use css styling for past(grey)
if ( (9 + (i)) < currentHr ){
    blockHr[i].classList.add("past")
    console.log('past')
    }
    //if the current hr == the listed hr use css styling for current(red)
    else if (( 9 + (i)) == currentHr ) {
    blockHr[i].classList.remove("past");
    blockHr[i].classList.add("present");
    console.log("present");
    }
    else {
    //and if the current hr is greater than the listed hr use css styling for future(Green)   
    blockHr[i].classList.remove("past");
    blockHr[i].classList.remove("present")
    blockHr[i].classList.add("future")
    console.log("future");
    }
}
//saving input events in local storage
//make an array of the buttons
var buttons = document.querySelectorAll(".saveBtn")

//using forEach to activate eventListener
//create an array of items combining the hr with the text entered at that time
buttons.forEach((el)=>
    el.addEventListener("click", function(){        
        var text = el.previousElementSibling.value;
        var time = el.parentElement.getAttribute("id")
       
        console.log(text);
        console.log(time);
        //storing the items in local storage
        localStorage.setItem(time,text);
    })
    );
//retrieve the items from local storage and placing in daytimer
document.querySelector("#hr-9").innerHTML = localStorage.getItem(9,)
document.querySelector("#hr-10").innerHTML = localStorage.getItem(10,)
document.querySelector("#hr-11").innerHTML = localStorage.getItem(11,)
document.querySelector("#hr-12").innerHTML = localStorage.getItem(12,)
document.querySelector("#hr-1").innerHTML = localStorage.getItem(1,)
document.querySelector("#hr-2").innerHTML = localStorage.getItem(2,)
document.querySelector("#hr-3").innerHTML = localStorage.getItem(3,)
document.querySelector("#hr-4").innerHTML = localStorage.getItem(4,)
document.querySelector("#hr-5").innerHTML = localStorage.getItem(5,)