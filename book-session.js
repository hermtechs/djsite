const appointments = document.querySelectorAll('.appointment');
const dropDownIcons = document.querySelectorAll('.dropdown-icon');
const daysContainer = document.querySelector('.days-container');
// const dateContainer = document.querySelectorAll('.date-container');
// console.log(dateContainer)
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
        // console.log('false')
    eachAppointment.style.display = 'block'; 
    dropDownIcons.forEach(icon=>icon.style.transform = 'scale(1,0)') 
    }
}
}

//MAKE AN APPOINTMENT
const days = document.querySelectorAll('.day');
const times = document.querySelectorAll('.time')
// console.log(times);
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

const dayOfWeekNo = document.querySelectorAll('.day-of-week-no')

const today = new Date();
// console.log(today)

//comparing each date in DOM with current date and finding the difference btn the 2
function removeOutOfDate(){
const dates = document.querySelectorAll('.date')
const curentDateInMs = Date.parse(today);
const currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}` ;
    dates.forEach(date=>{
      const eachDateAsString =  `${date.innerText} ${currentTime}`
    dateInMs = Date.parse(eachDateAsString) //convert to milliseconds(ms)
    // console.log(dateInMs)
    if(dateInMs<curentDateInMs){
        date.parentElement.parentElement.parentElement.remove();
    }
    })
    
}

const dayOfWeek = today.getDay(); 
const month = today.getMonth();
console.log(month)
const dayofMonth = today.getDate();
const year = today.getFullYear();
const dateString = `${month} ${dayofMonth} ${year}`;
// console.log(dateString)
// console.log(month)
const daysInMonth = (year, month)=>{
    return new Date(year, month+1,0).getDate(); //+1 to month cuz counting months starts from zero
 }
const currentMonthDays = daysInMonth(year,month);

const weekDays = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function createAppointmentsForMonth(){
for(var i=1; i<=currentMonthDays; i++){
    // console.log(i)
    const calendar = ` <div class="day">
    <div class="date-container">
    <h5 class="day-of-week">${weekDays[dayOfWeek]}</h5>
    <h6 class="date">${i} ${months[month]} ${year}</h6>
    </div>
     <div class="times">
      <span  class="time">8:00am</span>
      <span class="time">9:00am</span>
      <span class="time">10:00am</span>
      <span class="time">11:00am</span>
      <span class="time">12:00pm</span>
      <span class="time">1:00pm</span>
      <span class="time">2:00pm</span>
      <span class="time">3:00pm</span>
      <span class="time">4:00pm</span>
      <span class="time">5:00pm</span>
     </div>
     </div> `

    var dayElement = document.createElement('div');
    dayElement.innerHTML = calendar; 
    daysContainer.appendChild(dayElement)
    dayElement.addEventListener('click', showAppointmentTime)
    }
    updateDayOfWeek()
    removeOutOfDate()
    // dateContainer.push(dayElement);
    // console.log(dateContainer);
}
createAppointmentsForMonth();

//getting date from DOM and updating day of the week for each date
function updateDayOfWeek(){
    const dates = document.querySelectorAll('.date');
    dates.forEach((date)=>{
        const eachDayDate = date.innerText;
        const eachDay  = new Date(eachDayDate).getDay()
        // console.log(eachDay)
        const dayOfWeek = weekDays[eachDay]
        const dayofWeekElement = date.parentElement.querySelector('.day-of-week')
        dayofWeekElement.innerText = dayOfWeek;
    })
}

function showAppointmentTime(event){
    // alert("hello")
    const timesToDisplay = event.currentTarget.parentElement.querySelectorAll('.times');
    // timesToDisplay.style.display = "block";
    const clickedTimesElement = event.currentTarget.querySelector('.times')
    // console.log(timesToDisplay)
    timesToDisplay.forEach(times=>{
        times.style.display = 'none';
        clickedTimesElement.style.display = "block"
        })
}