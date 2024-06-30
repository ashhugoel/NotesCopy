import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inlist, changeinlist] = useState([]);

  function addnote(note) {
    console.log(note, typeof note);
    changeinlist((prevnote) => {
      return [...prevnote, note];
    });
    inlist.map((i, index) => {
      console.log(i);
    });
  }

  function deletenote(id) {
    console.log("delte clicked for id:" + id);
    changeinlist(
      inlist.filter((x, index) => {
        return index != id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />

      {inlist.map((i, index) => {
        return (
          <Note
            ondelete={deletenote}
            id={index}
            key={index}
            title={i.title}
            content={i.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
