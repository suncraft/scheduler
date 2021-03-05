import { useState, useEffect } from "react";
// const axios = require('axios').default;
import axios from 'axios';

export default function useApplicationData(initial) {

const [state, setState] = useState({
  day: "",
  days: [],
  appointments: {},
  interviewers: {}
});

function bookInterview(id, interview) {

  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  console.log("From bookInterview using save props: ",id, interview);
  setState({
    ...state,
    appointments
  });
  const putURL = `/api/appointments/${id}`;
  return axios.put(putURL, appointment)
  .then(() => setState({...state, appointments }))
  // days: updatedDays
}

function cancelInterview(id) {
  const appointment = {
    ...state.appointments[id],
    interview: null
  } 

  const appointments = {
    ...state.appointments,
    [id]: appointment
  };

  return axios.delete('/api/appointments/' + id, {...appointment})
    .then(res => {
      setState({ ...state, appointment, appointments });
    })
}

const setDay = day => setState({ ...state, day });

useEffect(() => {
  const daysUrl = `/api/days`;
  const appointmentsUrl = `/api/appointments`;
  const interviewersUrl = `/api/interviewers`;
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