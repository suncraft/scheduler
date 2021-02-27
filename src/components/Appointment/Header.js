import React from "react";


export default function Header(props) {
  // const [stateOf, setOf] = useState(""); //template incase I need state


  return (
  <header className="appointment__time">
    <h4 className="text--semi-bold">{props.time}</h4>
    <hr className="appointment__separator" />
  </header>
    )
}