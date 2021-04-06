import React from "react"; //no useState or useEffect because of useApplicationData
import DayList from "components/DayList"
import useApplicationData from "../hooks/useApplicationData"

import "components/Application.scss";

import Appointment from "components/Appointment/Index";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors"



export default function Application() {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();


  const GETinterviewers = getInterviewersForDay(state, state.day);
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const renderAppointments = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id} //propbably don't need key and id, but it doesn't work without id since it's prop for other stuff
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
        <Appointment key="last" time="5pm" /> 
        {/* I wonder where I was supposed to put this tbh */}


      </section>
    </main>
  );
};