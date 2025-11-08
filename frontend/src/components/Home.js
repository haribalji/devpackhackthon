import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/notecontext";
import Notes from "./Notes";
import Addnote from "./Addnote";
const Home = (props) => {
  const a = useContext(noteContext);
  const { notes, setNotes } = a; //doing the deconstuction
 
  return (
    <div>
      <Notes showAlert={props.showAlert} />
    </div>
  );
};

export default Home;
