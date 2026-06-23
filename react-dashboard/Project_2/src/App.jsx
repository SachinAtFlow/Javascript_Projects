import React, { useState } from 'react'
import ColorPallet from './colorPallet.jsx'
const ComponentName = () => {
  let [bgColor, setBgColor] = useState('red')
  // setBgColor((color) => {
  //         console.log('color changed')
  //         return { bgColor: color }
  //       })
  return (
    <div id="compo" className=" border-2 border-black h-screen w-full" style={{ backgroundColor: bgColor }}>

      <ColorPallet color={bgColor} onColorChange={setBgColor} />
      
        
    </div>

  )
}

export default ComponentName  