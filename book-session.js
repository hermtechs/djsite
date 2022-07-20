const appointments = document.querySelectorAll('.appointment');
const dropDownIcons = document.querySelectorAll('.dropdown-icon');

appointments.forEach(appointment=>{
 appointment.addEventListener('click', dropDown)
 appointment.style.display = 'block'
})
/*
function dropDown(event){
const clickedElement = event.currentTarget;
// appointments.forEach(appointment=>appointment.style.display = 'none');
for(var i=0; i<appointments.length; i++){
    const eachAppointment = appointments[i];
    eachAppointment.style.display = 'none';
    clickedElement.style.display = 'block';
    clickedElement.querySelector('.dropdown-icon').style.transform = 'scale(1.1)'
}


}
dropDownIcon.forEach(icon=>icon.addEventListener('click', (event)=>{
    // eachAppointment[2].style.display = 'block';
    const allAppointmentElements = [...appointments]
    // console.log(eachAppointment);
   const hiddenElements = allAppointmentElements.filter(el=>el.style.display==='none')
//   console.log(hiddenElements);
hiddenElements.forEach(element=>{
    element.classList.add('show')
    // console.log(element) 
event.currentTarget.style.transform= 'scale(1,0)'

});

}))*/

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
const curentDateInMilliseconds = Date.parse(today);
const currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}` ;
console.log(today)

    dates.forEach(date=>{
      const eachdateAsString =  `${date.innerText} 2022 ${currentTime}`
    //   console.log(dateAsString)
    console.log(eachdateAsString)
    dateInMilliseconds = Date.parse(eachdateAsString)
    console.log(dateInMilliseconds)
    if(dateInMilliseconds<curentDateInMilliseconds){
        // console.log('true');
        date.parentElement.remove();
    }
    })

}
removeOutOfDate()