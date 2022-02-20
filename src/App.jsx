import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ChatbotButton from './component/ChatbotButton'
import Chatframe from './component/Chatframe'
import Progressbar from './component/Progressbar'

function App() {
  const [chatVisible, setChatVisibile] = useState(false)

  return (
    <div className="App">
      {/* <h3>ChatBot UI</h3> */}
      <ChatbotButton value={{setChatVisibile, chatVisible}}/>
      {chatVisible && <Chatframe /> }
      {/* <Chatframe /> */}
      {/* <Progressbar/> */}
    </div>
  )
}

export default App
