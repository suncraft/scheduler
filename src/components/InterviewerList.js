import React from "react";
import "components/InterviewerList.scss";
// import classNames from "classnames";

import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {

  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"> { interviewers } </ul>
    </section>
  )
} 

//template: ####################
// <section className="interviewers">
//  <h4 className="interviewers__header text--light">Interviewer</h4>
//  <ul className="interviewers__list"></ul>
// </section>


// from: https://kentcdodds.com/blog/prop-drilling
// function Toggle() {
//   const [on, setOn] = React.useState(false)
//   const toggle = () => setOn(o => !o)
//   return (
//     <div>
//       <div>The button is {on ? 'on' : 'off'}</div>
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   )
// }


// function Toggle() {
//    const [on, setOn] = React.useState(false)
//    const toggle = () => setOn(o => !o)
//    return <Switch on={on} onToggle={toggle} />
// }

// function Switch({on, onToggle}) {
//   return (
//      <div>
//         <SwitchMessage on={on} />
//         <SwitchButton onToggle={onToggle} />
//       </div>
//     )
//   }
  
//   function SwitchMessage({on}) {
//     return <div>The button is {on ? 'on' : 'off'}</div>
//   }
  
//   function SwitchButton({onToggle}) {
//     return <button onClick={onToggle}>Toggle</button>
//   }