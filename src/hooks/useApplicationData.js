import { useState, useEffect } from "react";
// const axios = require('axios').default;
import axios from 'axios';

export default function useApplicationData(initial) {

const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});

// function bookInterview(id, interview) {

//   const appointment = {
//     ...state.appointments[id],
//     interview: { ...interview }
//   };
//   const appointments = {
//     ...state.appointments,
//     [id]: appointment
//   };
//   console.log("From bookInterview using save props: ",id, interview);
//   setState({
//     ...state,
//     appointments
//   });
//   const putURL = `http://localhost:8001/api/appointments/${id}`;
//   return axios.put(putURL, appointment)
//   .then(() => setState({...state, appointments }))
//   // days: updatedDays
// }

function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  const updatedDays = state.days.map((day) => {
    if (day.appointments.includes(id)) {
      const appointmentz = state.appointments[id]
      if (appointmentz.interview === null && appointmentz.id === id) {
        return {...day, spots: day.spots - 1}
      } else {
        return {...day}
      }
    } else {
      return {...day}
    }
  }) 
  const url = `http://localhost:8001/api/appointments/${id}`;
  return axios.put(url, appointment)
    .then(() => setState({...state, appointments, days: updatedDays}))
};

function cancelInterview(id) {
  const appointment = {
    ...state.appointments[id],
    interview: null
  } 

  const appointments = {
    ...state.appointments,
    [id]: appointment
  };

  return axios.delete('http://localhost:8001/api/appointments/' + id, {...appointment})
    .then(res => {
      setState({ ...state, appointment, appointments });
      // dispatch({ type: SET_INTERVIEW, value: {appointments} });
    })
}

const setDay = day => setState({ ...state, day });

useEffect(() => {
  const daysUrl = `http://localhost:8001/api/days`;
  const appointmentsUrl = `http://localhost:8001/api/appointments`;
  const interviewersUrl = `http://localhost:8001/api/interviewers`;
  Promise.all([
    axios.get(daysUrl),
    axios.get(appointmentsUrl),
    axios.get(interviewersUrl)
  ])
    .then((all) => {

      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      // console.log(state);


    })
    .catch(err => {
      console.log(err)
    });
}, []);

return {state, setDay, bookInterview, cancelInterview};

}