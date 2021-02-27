import React, { useState } from "react";
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"


export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  // const [name, setName] = useState(""); //template incase I need state
  // const [interviewer, setInterviewer] = useState(1); //template incase I need state

  const reset = function () {
    setName("");
    setInterviewer(null);
  }

  const cancel = function() {
    props.onCancel();
    reset();
  }

  const save = function() {
    props.onSave(name, interviewer);
    reset();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={save}>Save</Button>
        </section>
      </section>
    </main>
  )
}

// <Form 
//         name=""
//         interviewers={interviewers}
//         interviewer={1}
//         onSave={action("onSave")}
//         onCancel={action("onCancel")}
//       />
//     ))
//     .add("Create", () => (
//       <Form 
//         interviewers={interviewers}
//         onSave={action("onSave")}
//         onCancel={action("onCancel")}
//       />
