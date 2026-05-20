import React from "react";
import Like from "./Like";

function Profile({ title, description, Dp }) {
  console.log(Dp)
  return (
    // <div className="flex justify-center m-10">
    <div className="bg-blue-300 w-80 p-5 rounded-xl font-serif m-5">
      <img className="h-40 rounded-md" src={Dp} alt="img" />
      <div className=" flex justify-between">
          <p className="font-bold text-xl inline">{title}</p>
          <Like />
      </div>
        
        <p>{description}</p>


      


    </div>
    // </div>
  );
}

export default Profile;