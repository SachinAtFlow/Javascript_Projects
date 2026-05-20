import React from "react";
import { useState } from "react";
import AddNotes from "./AddNotes";
// import Notes from "./Notes";

function Card() {
  const [Note,setNote]=useState("");
  return <div className=" flex h-80 w-100 bg-slate-600 rounded-xl m-auto mt-10 shadow-xl ">
    <AddNotes/> 
    {/* <Notes/> */}

  </div>

}

export default Card;