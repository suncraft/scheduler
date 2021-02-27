import React from "react";


export default function Empty(props) {
  // const [stateOf, setOf] = useState(""); //template incase I need state


  return (
<main className="appointment__add">
  <img
    className="appointment__add-button"
    src="images/add.png"
    alt="Add"
    onClick={props.onAdd}
  />
</main>
    )
}