import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";


export default function InterviewerListItem(props) {

  const interviewers__item = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

//mine:
  // return (                   
  //   <li className={interviewers__item} onClick={props.setInterviewer}>
  //   <img
  //     className="interviewers__item-image"
  //     src={props.avatar}
  //     alt={props.name}
  //   />
  //   {props.selected && props.name}
  //   </li>
  // )

  return (
    <li className={interviewers__item} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );

// <InterviewerListItem
//       id={interviewer.id}
//       name={interviewer.name}
//       avatar={interviewer.avatar}
//       />

//     <li className="interviewers__item">
//     <img
//       className="interviewers__item-image"
//       src="https://i.imgur.com/LpaY82x.png"
//       alt="Sylvia Palmer"
//     />
//     Sylvia Palmer
//     </li>

}