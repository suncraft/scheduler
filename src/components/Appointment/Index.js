import React, { Fragment } from "react";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

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
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

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
  // .then(console.log())
  .then(() => transition(SHOW))
  .catch(error => transition(ERROR_SAVE, true));
}

function deleteAppointment(event) {
  transition(DELETE, true);
  props.cancelInterview(props.id)
  .then(() => transition(EMPTY))
  .catch(error => transition(ERROR_DELETE, true));
}

  return (
    <Fragment>
    <article className="appointment">
      <Header time={props.time}/>

      {mode === SAVING && <Status message="Saving..." />} 
      {mode === DELETE && <Status message="Deleting..." />}
      {mode === ERROR_SAVE && <Error message="Unable to save." onClose={back}/>}
      {mode === ERROR_DELETE && <Error message="Unable to delete." onClose={back}/>}
      {mode === CONFIRM && (
        <Confirm 
          message="Are you sure you would like to delete this?" 
          onCancel={back} 
          onConfirm={deleteAppointment}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          name={props.interview.student}
          interviewer={props.interview.interviewer} //would I do the same thing here? With || null ???
        />
      )}

      {mode === SHOW && (
        <Show
          students={props.interview ? props.interview.student : null}
          interviewer={props.interview ? props.interview.interviewer : null}
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