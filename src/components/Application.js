import React, { useState, useEffect } from "react";
import axios from 'axios';
import DayList from "components/DayList"


import "components/Application.scss";

import Appointment from "components/Appointment/Index";
import { getAppointmentsForDay } from "helpers/selectors"


export default function Application(props) {
  // const [day, setDay] = useState("Monday"); //mine
  // const [days, setDays] = useState([]);

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  // const setDays = (days) => {
  //   setState((prev) => ({...prev, days}))
  // }


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

      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  console.log(state.interviewers);

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const renderAppointments = dailyAppointments.map(appointment => {

  console.log("From renderAppointments", appointment);

  return (
    <Appointment
      key={appointment.id}
      {...appointment}
      id={appointment.id}
      time={appointment.time}
      />
    )
  });
  

  return (
    <main className="layout">
      <section className="sidebar">
          <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
        days={state.days}
        day={state.day}
        setDay={setDay}
        />
      </nav>
      <img
      className="sidebar__lhl sidebar--centered"
      src="images/lhl.png"
      alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">

        { renderAppointments }

      </section>
    </main>
  );
}

// <Fragment>
// <article className="appointment">
//   <Header time={props.time}/>
//   {props.interview ?
//     <Show
//       students={props.interview.student}
//       interviewer={props.interview.interviewer} 
//       onEdit={props.onEdit}
//       onDelete={props.onDelete}
//     /> :
//   <Empty
//     onAdd={props.onAdd} 
//   />}
// </article>
// </Fragment>
