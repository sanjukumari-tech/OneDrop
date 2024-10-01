import React from 'react'
import MainLeft from './MainLeft'
import MainMiddle from './MainMiddle'
import MainRight from './MainRight'

const Main = () => {
  return (
    <div style={{display:"flex"}}>
        <MainLeft/>
        <MainMiddle/>
        <MainRight/>
    </div>
  )
}

export default Main