import React,{ useState } from "react";


function Like(){
    const [liked,setLiked]=useState(false);
    return(
        <button
        className={`text-3xl ${liked ? "text-red-500" : "text-white"}`}
        onClick={()=> setLiked(!liked)}
        >♥</button>
    )
}
export default Like;