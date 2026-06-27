import React from 'react'
import './index.css'
function ColorPallet({ color, onColorChange }) {
  //   let onChange=setBgColor((color) => {
  //     console.log('color changed')
  //     return {bgColor: color}
  // })
  let colorList = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange']
  return (
    <div className="bg-white border-2 border-black h-10 w-[80%] m-auto rounded-xl flex justify-around items-center fixed top-90 left-20 flex-wrap gap-2 duration-2000">
      
      {colorList.map((color) => {
        return (
          <button className={`text-${color.toLowerCase()}-500 rounded-lg shadow-lg`}
            key={color}
            onClick={() => {
              console.log('clicked ' + color)
              onColorChange(color)
            }}>

            {color}
          </button>
        )
      })}
    </div>
  )
}

export default ColorPallet
