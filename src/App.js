import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const messageListener = window.addEventListener('message', (e) => {
      alert(JSON.stringify(e.data));
    });
    return messageListener;
  }, []);

  const sendMessage = () => {
    window.ReactNativeWebView.postMessage('Hi from PWA');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={sendMessage}>
          Say Hi
        </button>
      </header>
    </div>
  );
}

export default App;
