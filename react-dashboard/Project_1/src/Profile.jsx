import React from "react";

function Profile({ title, price, Dp }) {
  console.log(Dp)
  return (
    // <div className="flex justify-center m-10">
    <div className="bg-blue-300 w-80 p-5 rounded-xl font-serif m-5">
      <img className="h-40 rounded-md" src={Dp} alt="img" />
        <p className="font-bold">{title}</p>
        <p>{price}</p>


      


    </div>
    // </div>
  );
}

export default Profile;