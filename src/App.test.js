import React from 'react';
import ReactDOM from 'react-dom';
import ChatWidget from './components/chat'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
