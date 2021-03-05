import React from "react";
import "components/InterviewerList.scss";

import InterviewerListItem from "components/InterviewerListItem";

function InterviewerList(props) {

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
  // from: https://kentcdodds.com/blog/prop-drilling

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">{props.name}</h4>
      <ul className="interviewers__list"> { interviewers } </ul>
    </section>
  )
};
//TEST CODE
// InterviewerList.propTypes = {
//     interviewers: PropTypes.array.isRequired
//   };

export default InterviewerList;