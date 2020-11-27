import React, {useContext} from 'react'
import {ColorContext} from './color'

export default function ShowArea() {
  let {color} = useContext(ColorContext)
  console.log(color);
  return (
    <div style={{color}}>
      字体的颜色 {color}
    </div>
  )
}
