import React from "react";

function Greet({name,txtcolor}) {
// let design={};
  return(

      <h1 className="text-3xl font-sans ml-10 font-bold" style={{color:txtcolor}}>{name}</h1>
  )
    
}

export default Greet;