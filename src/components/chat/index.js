import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

const SmartChat = (props) =>{
  const [ open, setOpen ] = useState(false);
  const toggleFloating = () =>{
    setOpen(!open)
  }

  return (
    <ChatBot
      floating={true}
      opened={open}
      toggleFloating={toggleFloating}
      steps={[
        {
          id: '0',
          message: 'Welcome to react chat widget!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          end: true,
        }
      ]}
    />
  )
}

export default SmartChat;