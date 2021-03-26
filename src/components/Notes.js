import React, { useState } from "react";

import avatar from "../images/avatar.png";

const Notes = ({ bc, sbc }) => {
  const makeDiv = (text) => {
    let div = document.createElement("div");
    div.innerHTML = text;
    return div;
  };
  return (
    <div className="notes">
      {bc.map((note) => (
        <div className="note" key={note.id}>
          <div className="noteTitle">
            <div className="noteAuthor">
              <div className="noteUserImg">
                <img src={note.img} alt="" width="30" />
              </div>
              <h1 className="noteUser">{note.username}</h1>
            </div>

            <h1 className="noteTime">{note.time}</h1>
          </div>

          <h1 className="noteName">{note.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: note.text }}></p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
