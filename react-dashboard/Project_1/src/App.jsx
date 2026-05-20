import React from "react";
import Profile from "./Profile";
import Greet from "./Greet";
import tanjiro from "./assets/tanjiro.jpg";
import Sekiro from "./assets/Sekiro.jpg";
import Devil from "./assets/Devil.png";




function App() {
  let profile = [
    {
      Dp: tanjiro,
      title: "Demon Slayer",
      description: "The Story of Tanjiro who fought for his Family"
    },
    {
      Dp: Devil,
      title: "Devil May Cry",
      description: "The man who insist the devil to cry"
    },
    {
      Dp: Sekiro,
      title: "Sekiro",
      description: "The man of Iron who never Gave Up"
    }
  ];
  return (
    <div className="bg-slate-700 min-h-screen w-full">
      <Greet name="Websito" txtcolor="red"/>
      {/* <Greet name="Sakiro" txtcolor="green"/> */}
      <div className="flex justify-center m-10 flex-wrap">
        {profile.map((item, index) =>{
          return(<Profile
            key={index}
            Dp={item.Dp}
            title={item.title}
            description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;