export function getAppointmentsForDay(state, day) {

  const filterDays = state.days.filter(dayObj => dayObj.name === day)

  // console.log(filterDays);

  if (filterDays.length === 0) {
    return [];
  }

  const appointmentsArray = [];

  for (const id of filterDays[0].appointments) {
    appointmentsArray.push(state.appointments[id]);
  }

  console.log(appointmentsArray);

  return appointmentsArray;
  
}; 