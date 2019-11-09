import React from 'react';
import ReactDOM from 'react-dom';
import ChatWidget from './components/chat'

let init = null;

export default {
  config: (config) =>{
      init = config;
  },
  widgets: {
    myWidget: {
      new: () => {
        return {
          render: () => {
            ReactDOM.render(<ChatWidget 
                clientKey={init.apiKey}
                headerTitle={init.headerTitle}
                selector={init.selector}  
            />, document.querySelector('#chat-app'));
          },
          unmount(){
            ReactDOM.unmountComponentAtNode(document.querySelector(init.selector)); 
          },
        }
      }
    }
  }
}
