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
  // console.log(appointmentsArray);
  return appointmentsArray;
}; 

export function getInterviewersForDay(state, day) {
  // if (state.days.length === 0) return []; //??? Why did the tests not like this??
  const dayInterviewer = state.days.filter(dayIn => dayIn.name === day)
  if (dayInterviewer.length === 0) return []; // but likes this????

  const interviewersArr = [];
  for (const id of dayInterviewer[0].interviewers) {
    interviewersArr.push(state.interviewers[id]);
  }

  return interviewersArr;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const ID = interview.interviewer;
  const theInterviewer = state.interviewers[ID];
  const interviewInfo = { ...interview, interviewer: theInterviewer };
  return interviewInfo;
}