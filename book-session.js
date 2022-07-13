const appointments = document.querySelectorAll('.appointment');
const dropDownIcon = document.querySelector('.dropdown-icon');

appointments.forEach(appointment=>{
    appointment.addEventListener('click', dropDown)
})

function dropDown(event){

const clickedElement = event.currentTarget;
// console.log(appointments);
const allAppointments = [...appointments]
// console.log(allAppointments)
clickedElement.id = 'vis';
allAppointments.forEach(appointment=>appointment.style.display = 'none')
const visible = allAppointments.filter(el=>el.id=='vis');
console.log(visible)
visible[0].style.display = 'block'

}

function showItemsAgain(allAppointments){
allAppointments.forEach(appointment=>appointment.style.display = 'block')
}

dropDownIcon.addEventListener('click', showMoreAppointments);

function showMoreAppointments(){
    appointments.forEach(appointment=>appointment.style.display = 'block');
    dropDownIcon.style.display = 'none'
}