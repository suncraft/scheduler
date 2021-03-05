import React from "react";
import "components/InterviewerList.scss";
// import PropTypes from 'prop-types';

import InterviewerListItem from "components/InterviewerListItem";

function InterviewerList(props) {
  // console.log("List: ", props);

  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={(event) => props.setInterviewer(interviewer.id)} //IT WORKS!!
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">{props.name}</h4>
      <ul className="interviewers__list"> { interviewers } </ul>
    </section>
  )
}
//TEST CODE
// InterviewerList.propTypes = {
//     interviewers: PropTypes.array.isRequired
//   };

export default InterviewerList;

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