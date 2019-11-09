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
          options:[
            { value: 'end', label: 'Kill Me', trigger: 'end' },
          ]
        },
        {
          id: 'end',
          end: true,
          message: 'Bye Bye'
        }
      ]}
    />
  )
}

export default SmartChat;