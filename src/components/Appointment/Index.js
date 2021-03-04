import React, { Fragment } from "react";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";


import useVisualMode from "hooks/useVisualMode"

import "components/Appointment/styles.scss";


export default function Appointment(props) {
  // const [stateOf, setOf] = useState(""); //template incase I need state

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETE = 'DELETE';
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);

function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
  };
  transition(SAVING)
  props.bookInterview(props.id, interview)
  .then(() => transition(SHOW))
  // .catch(error => transition(ERROR_SAVE, true));
}


function deleteAppointment(event) {
  transition(DELETE);
  props.cancelInterview(props.id)
  .then(() => transition(EMPTY))
  // .catch(error => transition(ERROR_DELETE, true));
}


  return (
    <Fragment>
    <article className="appointment">
      <Header time={props.time}/>

      {mode === SAVING && <Status message="Saving..." />} 
      {mode === DELETE && <Status message="Deleting..." />}
      {mode === CONFIRM && (
        <Confirm 
          message="Are you sure you would like to delete?" 
          onCancel={back} 
          // onConfirm={e => transition(DELETE)}
          onConfirm={deleteAppointment}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          name={props.interview ? props.interview.student : null}
          interviewer={props.interview ? props.interview.interviewer : []} //would I do the same thing here?
          mode="edit"
        />
      )}

      {mode === SHOW && (
        <Show
          students={props.interview ? props.interview.student : null}
          interviewer={[]} //WHY IS THIS WORKING WITH [] ????
          // props.interview ? props.interview.interviewer : null
          // onEdit={props.onEdit}
          // onDelete={props.onDelete}
          onEdit={(event) => transition(EDIT)}
          onDelete={(event) => transition(CONFIRM)}
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          mode="book"
        />
      )}
      
    </article>
  </Fragment>
  )
}

//old code
/* {props.interview ?
        <Show
          students={props.interview.student}
          interviewer={props.interview.interviewer} 
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        /> :
      <Empty
        onAdd={props.onAdd} 
      />} */