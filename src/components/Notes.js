import React from "react";

import avatar from "../images/avatar.png";

const Notes = () => {
  function convertDate() {
    // Time
    let time = new Date().toLocaleTimeString();
    let x = time.split(":");
    let finalTime = x[0] + ":" + x[1] + " " + time[time.length - 2] + time[time.length - 1];

    // Date

    let date = new Date().toString();
    let res = date.split(" ");

    let finalDate = res[0] + " " + " " + res[2] + " " + res[1] + " " + res[3];

    return finalTime + " - " + finalDate;
  }
  return (
    <div className="notes">
      <div className="note">
        <div className="noteTitle">
          <div className="noteAuthor">
            <div className="noteUserImg">
              <img src={avatar} alt="" width="30" />
            </div>
            <h1 className="noteUser">Hedayat Farahi</h1>
          </div>

          <h1 className="noteTime">{convertDate()}</h1>
        </div>

        <h1 className="noteName">Algorithm</h1>
        <p>
          <p>
            In electronics, a circuit is a closed path that allows electricity to flow from one point to another. It may include various electrical
            components, such as&nbsp;resistors, and capacitors, but the flow is unimpeded by a gap or break in the circuit.
          </p>
          <p>
            A flashlight is an example of a basic circuit. When the switch is off, the circuit is not closed, meaning electrical current will not flow
            from the batteries to the flashlight's bulb. When you move the switch to the on position, a piece of metal in the flashlight physically
            closes the gap in the circuit. Electricity from the batteries then flows to the bulb making it light up.
          </p>
        </p>
        <ol>
          <li>Psudocode</li>
          <li>Flow Chart</li>
        </ol>
      </div>

      <div className="note">
        <h1 className="noteTitle">Algorithm</h1>
        <p>
          <p>
            In electronics, a circuit is a closed path that allows electricity to flow from one point to another. It may include various electrical
            components, such as&nbsp;resistors, and capacitors, but the flow is unimpeded by a gap or break in the circuit.
          </p>
          <p>
            A flashlight is an example of a basic circuit. When the switch is off, the circuit is not closed, meaning electrical current will not flow
            from the batteries to the flashlight's bulb. When you move the switch to the on position, a piece of metal in the flashlight physically
            closes the gap in the circuit. Electricity from the batteries then flows to the bulb making it light up.
          </p>
        </p>
        <ol>
          <li>Psudocode</li>
          <li>Flow Chart</li>
        </ol>
      </div>

      <div className="note">
        <h1 className="noteTitle">Algorithm</h1>
        <p>
          <p>
            In electronics, a circuit is a closed path that allows electricity to flow from one point to another. It may include various electrical
            components, such as&nbsp;resistors, and capacitors, but the flow is unimpeded by a gap or break in the circuit.
          </p>
          <p>
            A flashlight is an example of a basic circuit. When the switch is off, the circuit is not closed, meaning electrical current will not flow
            from the batteries to the flashlight's bulb. When you move the switch to the on position, a piece of metal in the flashlight physically
            closes the gap in the circuit. Electricity from the batteries then flows to the bulb making it light up.
          </p>
        </p>
        <ol>
          <li>Psudocode</li>
          <li>Flow Chart</li>
        </ol>
      </div>

      <div className="note">
        <h1 className="noteTitle">Algorithm</h1>
        <p>
          <p>
            In electronics, a circuit is a closed path that allows electricity to flow from one point to another. It may include various electrical
            components, such as&nbsp;resistors, and capacitors, but the flow is unimpeded by a gap or break in the circuit.
          </p>
          <p>
            A flashlight is an example of a basic circuit. When the switch is off, the circuit is not closed, meaning electrical current will not flow
            from the batteries to the flashlight's bulb. When you move the switch to the on position, a piece of metal in the flashlight physically
            closes the gap in the circuit. Electricity from the batteries then flows to the bulb making it light up.
          </p>
        </p>
        <ol>
          <li>Psudocode</li>
          <li>Flow Chart</li>
        </ol>
      </div>
    </div>
  );
};

export default Notes;
