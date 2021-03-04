import React from "react";
// import classNames from "classnames";
import DayListItem from "components/DayListItem";

// .add("Monday", () => (
//   <DayList days={days} day={"Monday"} setDay={action("setDay")} />

export default function dayList(props) {
  // console.log("Daylist props: ", props);

  if (props.length === 0 || props.days === undefined) {
    return [];
  }

  const whichDay = props.days.map(day => {
    return (
      <DayListItem 
      key={day.id} 
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={props.setDay}  />
    )
  }
  )

  return (
    <ul>{ whichDay }</ul>
  )
};

//IF I WANT TO USE A TERNARY OPERATOR, maybe this for blank?
// { props
//   ? props.days.map(day => {
//     return (
//       <DayListItem 
//       key={day.id} 
//       name={day.name} 
//       spots={day.spots} 
//       selected={day.name === props.day}
//       setDay={props.setDay}  />
//     )
//   }
//   )
//   : "Loading"}