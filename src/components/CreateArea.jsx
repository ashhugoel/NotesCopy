import React, { useState } from "react";

function CreateArea(props) {
  const [textentered, textclear] = useState({ title: "", content: "" });
  const [notearray, isaddedtonotes] = useState([]);

  function publishnote(event) {
    event.preventDefault();
    isaddedtonotes((prev) => {
      return [...prev, textentered];
    });
    props.onadd(textentered);
    textclear({ title: "", content: "" });
  }

  function detectingText(event) {
    var { name, value } = event.target;
    textclear((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div>
      <form onSubmit={publishnote}>
        <input
          value={textentered.title}
          onChange={detectingText}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={textentered.content}
          onChange={detectingText}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
