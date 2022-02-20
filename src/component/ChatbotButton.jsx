import React from 'react'
import Chatframe from './Chatframe'

const ChatbotButton=({value})=>{
  const {chatVisible, setChatVisibile}= value
  return (
    <div>
        {/* <Chatframe/> */}
        {!chatVisible?<> 
        <div className='rounded-button-bg'> </div>
        <div className='rounded-button' onClick={()=>setChatVisibile(chatVisible!==true? true: false)} >👩🏻</div>
        </>
        :<div className='rounded-button' onClick={()=>setChatVisibile(chatVisible!==true? true: false)} > X </div>
}
    </div>
  )
}

export default ChatbotButton