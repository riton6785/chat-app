import HomePage from './Pages/HomePage';
import './App.css';
import {Route}  from 'react-router-dom'
import Chats from './Pages/Chats';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact/>
      <Route path="/chat" component={Chats}/>
    </div>
  );
}

export default App;
