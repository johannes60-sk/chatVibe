import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    {/* <div  className="messagesStatic">Mon messsage</div>
    <div  className="messagesStatic">Mon messsage</div>
    <div  className="messagesStatic">Mon messsage</div>
    <div  className="messagesStatic">Mon messsage</div>
    <div  className="messagesStatic">Mon messsage</div>
    <div  className="messagesStatic">Mon messsage</div>
    <div  className="messagesStatic">Mon messsage</div>
    <div  className="messagesStatic">Mon messsage</div> */}
  </ScrollToBottom>
);

export default Messages;