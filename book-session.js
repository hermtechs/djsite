const appointments = document.querySelectorAll('.appointment');
const dropDownIcons = document.querySelectorAll('.dropdown-icon');
const daysContainer = document.querySelector('.days-container');
const chooseDate = document.querySelector('.choose-date')
const confirmationDetailsContainer = document.querySelector('.confirmation-details')
const details =document.querySelector('.details')
console.log(details);
const cancelAppointment = document.querySelector('.cancel');
const proceedWithAppointment =document.querySelector('.proceed');

//firebase code ***
window.onload = initializeApp();
    // Initialize Firebase
    function initializeApp(){
        const firebaseConfig = {
            apiKey: "AIzaSyBxBDsBphVbYDaKgLXVOYl46Wn7gCoSBtM",
            authDomain: "asapy-site-data.firebaseapp.com",
            projectId: "asapy-site-data",
            storageBucket: "asapy-site-data.appspot.com",
            messagingSenderId: "454229246653",
            appId: "1:454229246653:web:03a88b447dfe611cc3add4"
          };
    firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.firestore();
    const appointmentDataCollection = database.collection("appointmentDataCollection");
    // console.log(database)
// firebase code ***    


// const dateContainer = document.querySelectorAll('.date-container');
// console.log(dateContainer)
appointments.forEach(appointment=>{
 appointment.addEventListener('click', dropDown)
 appointment.style.display = 'block'
})

let appointmentData = [];

function dropDown(event){
const clickedElement = event.currentTarget;
for(var i=0; i<appointments.length; i++){
    const eachAppointment = appointments[i];
    const appointmentDuration = clickedElement.querySelector('.duration').innerText;
    
    if(eachAppointment.style.display=='block'&&clickedElement.style.display=='block'){
 
    eachAppointment.style.display = 'none'; 
    clickedElement.style.display = 'block';
    dropDownIcons.forEach(icon=>icon.style.transform = 'scale(1.1)') 
     chooseDate.style.display = 'block'   

    // appointmentData.push(appointmentDuration);
    appointmentData = [appointmentDuration]
   
    }
    else{
       
    eachAppointment.style.display = 'block'; 
    dropDownIcons.forEach(icon=>icon.style.transform = 'scale(1,0)') 
    chooseDate.style.display = 'none'   

    appointmentData = [];
    }
}
// console.log(appointmentData)
}

//MAKE AN APPOINTMENT
const days = document.querySelectorAll('.day');
const times = document.querySelectorAll('.time')

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
    //   console.log(eachDateAsString)
    dateInMs = Date.parse(eachDateAsString) //convert to milliseconds(ms)
    // console.log(dateInMs)
    if(dateInMs<curentDateInMs){
        date.parentElement.parentElement.parentElement.remove();
    }
    })
    
}

const dayOfWeek = today.getDay(); 
const month = today.getMonth();
// console.log(month)
const dayofMonth = today.getDate();
const year = today.getFullYear();
const dateString = `${month} ${dayofMonth} ${year}`;
// console.log(dateString)
// console.log(month)
const daysInMonth = (year, month)=>{
    return new Date(year, month+1,0).getDate(); //+1 to month cuz js starts counting months from zero but humans from 1
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
      <span  class="time">08:00 AM</span>
      <span class="time">09:00 AM</span>
      <span class="time">10:00 AM</span>
      <span class="time">11:00 AM</span>
      <span class="time">12:00 PM</span>
      <span class="time">01:00 PM</span>
      <span class="time">02:00 PM</span>
      <span class="time">03:00 PM</span>
      <span class="time">04:00 PM</span>
      <span class="time">05:00 PM</span>
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

//showing times of the day after clicking on the date of the week
function showAppointmentTime(event){
    
    const timesToDisplay = event.currentTarget.parentElement.querySelectorAll('.times');
   
    const clickedTimesElement = event.currentTarget.querySelector('.times')
 
    timesToDisplay.forEach(times=>{
        times.style.display = 'none';
        clickedTimesElement.style.display = "block"
        })
    const timeToSelect = clickedTimesElement.querySelectorAll('.time');
    // console.log(timeToSelect);
    timeToSelect.forEach(eachTime=>{
        eachTime.addEventListener('click', createTime);
    })
    
}

let clickCounter = 0; //for checking how many times an element has been clicked
function createTime(e){
    clickCounter++;
    const startingTime = e.currentTarget;
    // startingTime.parentElement.parentElement.style.display = "none"
    // console.log(startingTime.parentElement.parentElement)
    const allDateElements = document.querySelectorAll('.day');
    allDateElements.forEach(element=>{element.parentElement.style.display='none'})
    startingTime.parentElement.parentElement.parentElement.style.display = "block"
    // console.log(startingTime)
    const selectedTimeString = startingTime.innerText;

    const timeToSelect = startingTime.parentElement.querySelectorAll('.time');
    const dateOfSelectedTime = startingTime.parentElement.parentElement.querySelector('.date').innerText;
    // console.log(dateOfSelectedTime)
    
        // (converted to milliseconds by Date.parse())
    const fullDateBasedOnTimeClicked =Date.parse(`${dateOfSelectedTime} ${selectedTimeString}`);
   
    const millisecondsInoneHour = 3600000; 

    //appointmentData is an array where we keep pushing data about users choices
    const newTime = fullDateBasedOnTimeClicked+(appointmentData[0]*millisecondsInoneHour);

    for(var i=0; i<timeToSelect.length; i++){

        const eachTime = timeToSelect[i]

        // (converted to milliseconds by Date.parse())
        const fullDateforEachSelectedTime = Date.parse(`${dateOfSelectedTime} ${eachTime.innerText}`)
    
    // checking time that is in range of user's selected time and total duration of his selected appointment
        if(fullDateforEachSelectedTime<=newTime&&fullDateforEachSelectedTime>=fullDateBasedOnTimeClicked){
            // console.log(fullDateOfSelectedTime)
            eachTime.classList.add('selected-time');

    }
}
    const selectedHours =[...document.querySelectorAll('.selected-time')]
    appointmentData.push(selectedHours);
    appointmentData.push(dateOfSelectedTime);


    const sessionDuration = appointmentData[0];
    if(selectedHours.length>=sessionDuration){
        
        confirmAppointmentAndProceed();
        console.log(appointmentData)
    }
    else{
        // console.log(selectedHours.length, sessionDuration)
        alert('not enough time for selected session,Pease choose another starting time or another day');
        selectedHours.forEach(selectedHour=>selectedHour.classList.remove('selected-time'))
        appointmentData.splice(1,clickCounter); /*using the click counter on the
         splice method is to make sure we will always remove selectedHours from the array even if their index keep changing every click*/
        // console.log(appointmentData)
    }

}

function confirmAppointmentAndProceed(){

    const confirmedDateElement = document.querySelector('.confirmed-date');
    const confirmedDurationElement = document.querySelector('.confirmed-duration')
    const confirmedStartingTimeElement = document.querySelector('.starting-time');
    const confirmedEndingTimeElement = document.querySelector('.ending-time');

    const confirmedDate = `${weekDays[dayOfWeek]}, ${appointmentData[2]}`
    const confirmedDuration = appointmentData[0]
    const confirmedStartingTime = appointmentData[1][0].innerText
    const confirmedEndingTime = appointmentData[1][appointmentData[1].length-1].innerText

    confirmedDateElement.innerText=confirmedDate;
    confirmedDurationElement.innerText = confirmedDuration;
    confirmedStartingTimeElement.innerText = confirmedStartingTime;
    confirmedEndingTimeElement.innerText =confirmedEndingTime;

    confirmationDetailsContainer.style.transform = "scale(1)"

    // if user decides to confirm appointment schedule
    proceedWithAppointment.addEventListener('click', ()=>{
        addAppointmentDataToFirebase(confirmedDate,confirmedStartingTime,
            confirmedEndingTime,confirmedDuration)
    });
    // proceedWithAppointment.addEventListener('click', addAppointmentDataToFirebase);
    //incase user decides to cancel without confirming
    cancelAppointment.addEventListener('click', ()=>{
        // resetting everything by refreshing the page
        window.location.reload();
    })
}

function addAppointmentDataToFirebase(confirmedDate,confirmedStartingTime,
    confirmedEndingTime,confirmedDuration){
    console.log("added to firestore")
    console.log(confirmedDate)

    appointmentDataCollection.add({
            appointmentDate:confirmedDate,
            appointmentStartTime:confirmedStartingTime,
            appointmentEndTime:confirmedEndingTime,
            appointmentDuration:confirmedDuration,

        })
    details.innerHTML = `<h4>Your request has been submited, we will get 
                                back to you shortly ! <span><i class="fa-solid fa-circle-xmark"></i><span></h4>
                                `   
    setTimeout(()=>{
     window.location.reload();
    },2000)    
}