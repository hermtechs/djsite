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