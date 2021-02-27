import React, { Fragment } from "react";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

import "components/Appointment/styles.scss";


export default function Appointment(props) {
  // const [stateOf, setOf] = useState(""); //template incase I need state


  return (
    <Fragment>
    <article className="appointment">
      <Header time={props.time}/>
      {props.interview ?
        <Show
          students={props.interview.student}
          interviewer={props.interview.interviewer} 
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        /> :
      <Empty
        onAdd={props.onAdd} 
      />}
    </article>
  </Fragment>
  )
}