import React from "react";
import "components/InterviewerListItem.scss";
import className from "classnames";


export default function InterviewerListItem(props) {
  console.log("List item: ", props);

  const interviewers__item = className("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewers__item} 
    onClick={props.setInterviewer}
    // onClick={() => props.setInterviewer(props.name)}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected ? props.name : ""}
    </li>
  );
  // {props.selected && props.name}
  
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