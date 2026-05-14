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
      price: 999
    },
    {
      Dp: Devil,
      title: "Devil May Cry",
      price: 799
    },
    {
      Dp: Sekiro,
      title: "Sekiro",
      price: 999
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
            price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;