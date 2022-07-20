const appointments = document.querySelectorAll('.appointment');
const dropDownIcons = document.querySelectorAll('.dropdown-icon');

appointments.forEach(appointment=>{
 appointment.addEventListener('click', dropDown)
 appointment.style.display = 'block'
})


function dropDown(event){
const clickedElement = event.currentTarget;
for(var i=0; i<appointments.length; i++){
    const eachAppointment = appointments[i];
    if(eachAppointment.style.display=='block'&&clickedElement.style.display=='block'){
        // console.log('true')
    eachAppointment.style.display = 'none'; 
    clickedElement.style.display = 'block';
    dropDownIcons.forEach(icon=>icon.style.transform = 'scale(1.1)') 
    }
    else{
        console.log('false')
    eachAppointment.style.display = 'block'; 
    dropDownIcons.forEach(icon=>icon.style.transform = 'scale(1,0)') 
    }
}
}

//MAKE AN APPOINTMENT
const days = document.querySelectorAll('.day');

const times = document.querySelectorAll('.time')
console.log(times);
times.forEach(time=>time.addEventListener('click', createEvent))

function createEvent(e){
    const clickedTime = e.currentTarget;
    // clickedTime.classList.add('selected-time')
    const dayOfAppointment = clickedTime.parentElement;
    // console.log(dayOfAppointment);
    const selectedTime = dayOfAppointment.querySelectorAll('.time');
    // console.log(selectedTime)
    const duration = document.querySelector('.duration').innerText
    console.log(duration);
}

// const today = new Date();
// console.log(today)
// const timeNow = today.getHours();
// console.log(timeNow)
const daysOfWeek = document.querySelectorAll('.day-of-week')
const dates = document.querySelectorAll('.date')
// const dayOfWeekNo = document.querySelectorAll('.day-of-week-no')
// console.log(date, dayOfWeek)
// const dateInWords = `${date} 2022`
// console.log(dateInWords)
// const dateInMilliseconds = Date.parse(dateInWords)
// console.log(dateInMilliseconds)

// console.log(dayOfWeek)
function removeOutOfDate(){
    // console.log(day.innerText)
const today = new Date();
const curentDateInMs = Date.parse(today);
const currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}` ;
console.log(today)

    dates.forEach(date=>{
      const eachdateAsString =  `${date.innerText} 2022 ${currentTime}`
    //   console.log(dateAsString)
    console.log(eachdateAsString)
    dateInMs = Date.parse(eachdateAsString) //convert to milliseconds(ms)
    console.log(dateInMs)
    if(dateInMs<curentDateInMs){
        // console.log('true');
        date.parentElement.remove();
    }
    })

}
removeOutOfDate()
const time = '9:00am'
const time1 =  Date.parse(time);
console.log(time1);