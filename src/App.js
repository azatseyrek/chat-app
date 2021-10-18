import axios from 'axios';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from "./components/ChatFeed"



import './App.css';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="136c50d9-c315-4345-947c-ce7cf29d0c13"
      userName="azatseyrek"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
