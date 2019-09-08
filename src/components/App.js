import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import CustomHook1 from './CustomHook1';
import CustomHook2 from './CustomHook2';
import CustomHook3 from './CustomHook3';

function App({ children }) {
  const Home = () => <h1>Welcome to Custom Hooks!</h1>;
  const FourOFour = () => <h1>Oops! That Page Doesn't Exist</h1>;

  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link className="App-link" to="/">
              Home
            </Link>{' '}
            <Link className="App-link" to="cs1">
              CustomHook1
            </Link>{' '}
            <Link className="App-link" to="cs2">
              CustomHook2
            </Link>{' '}
            <Link className="App-link" to="cs3">
              CustomHook3
            </Link>
          </nav>
        </header>
        {children}
      </div>
      <Router>
        <Home path="/" />
        <CustomHook1 path="/cs1" />
        <CustomHook2 path="/cs2" />
        <CustomHook3 path="/cs3" />
        <FourOFour default />
      </Router>
    </>
  );
}

export default App;
