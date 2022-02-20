import React from 'react'
import Faq from './Faq'


const Chatframe=()=> {

  const FAQs= ["Can I redeem my FD before the original term?", "How do I pay my credit card  bill?","How can I get My account statement?","What is the tenure of Fixed Deposite?"]
  return (
    <div className="chatframe" >
      <h2>IRIS</h2>
      <h4>Hello 👋🏻</h4>
      <h6></h6>
      <p>I am Iris, a virtual assistant <br /> How may I help you ?</p>
      <div className='pre-question-box'>
        <h5 className='faq' >Frequently asked question</h5>

        {FAQs.map(que=>(
          <Faq question={{que}} />
        ))}

        <p className="start-chat">Start A New Conversation</p>
      </div>
    </div>
  )
}

export default Chatframe