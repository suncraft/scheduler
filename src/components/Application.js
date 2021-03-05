import React from "react"; //no useState or useEffect because of useApplicationData
import DayList from "components/DayList"
import useApplicationData from "../hooks/useApplicationData"

import "components/Application.scss";

import Appointment from "components/Appointment/Index";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors"


export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // console.log(state.interviewers);

  const GETinterviewers = getInterviewersForDay(state, state.day);
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const renderAppointments = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);

    console.log("From renderAppointments", appointment);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id} //propbably don't need key and id
        time={appointment.time}
        interview={interview}
        interviewers={GETinterviewers}
        bookInterview = {bookInterview}
        cancelInterview={cancelInterview}
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