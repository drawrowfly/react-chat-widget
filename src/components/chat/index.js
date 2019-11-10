import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';


const GitHubUrl = (props) =>{

  useEffect(() => {
    props.triggerNextStep()
  }, [])
  return (
    <div>
      here: <a href="https://github.com/drawrowfly/react-chat-widget" target="_blank"> GitHub </a>
    </div>
  )
}

const CdnSection = (props) =>{

  useEffect(() => {
    location.hash = "#cdn";
    props.triggerNextStep()
  }, [])
  return ('Going to CDN section')
}

const CreateAppSection = (props) =>{

  useEffect(() => {
    location.hash = "#create-react-app";
    props.triggerNextStep()
  }, [])
  return ('Going to Create React App section')
}

const SmartChat = (props) =>{
  const [ open, setOpen ] = useState(false);
  const [ headerTitle, setheaderTitle ] = useState('Chat');
  useEffect(() => {
    if (props.headerTitle){
      setheaderTitle(props.headerTitle);
    }
  },[])
  const toggleFloating = () =>{
    setOpen(!open)
  }

  return (
    <ChatBot
      floating={true}
      opened={open}
      headerTitle={headerTitle}
      toggleFloating={toggleFloating}
      botDelay={2000}
      steps={[
        {
          id: '0',
          message: `Hello There!`,
          trigger: '1',
        },
        {
          id: '1',
          message: `I'm a widget that was embeded in this blog post!`,
          trigger: '2',
        },
        {
          id: '2',
          message: `You can find my source code in this tutorial. Or.`,
          trigger: '3',
        },
        {
          id: '3',
          component: <GitHubUrl />,
          waitAction: true,
          trigger: '4',
        },
        {
          id: '4',
          message: `I can even navigate you to a different sections on this page`,
          trigger: 'sections',
        },
        {
          id: 'sections',
          options:[
            { value: 'cdnv', label: 'CDN', trigger: 'cdn' },
            { value: 'createv', label: 'Create React App', trigger: 'createapp' },
          ]
        },
        {
          id: 'cdn',
          component: <CdnSection />,
          waitAction: true,
          trigger: 'again',
        },
        {
          id: 'createapp',
          component: <CreateAppSection />,
          waitAction: true,
          trigger: 'again',
        },
        {
          id: 'again',
          message: `Try Again?`,
          trigger: 'new_try',
        },
        {
          id: 'new_try',
          options:[
            { value: 'yes', label: 'YES', trigger: 'sections' },
            { value: 'no', label: 'NO', trigger: 'end' },
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