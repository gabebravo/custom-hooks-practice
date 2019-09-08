import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import TimeDelayCS from './TimeDelayCS';
import WindowDimensionsCS from './WindowDimensionsCS';
import FetchDataCS from './FetchDataCS';

function App({ children }) {
  const Home = () => (
    <h1 style={{ textAlign: 'center' }}>Welcome to Custom Hooks!</h1>
  );
  const FourOFour = () => <h1>Oops! That Page Doesn't Exist</h1>;

  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link className="App-link" to="/">
              Home
            </Link>{' '}
            <Link className="App-link" to="time-delay">
              UseWait
            </Link>{' '}
            <Link className="App-link" to="window-dim">
              useWindowDimensions
            </Link>{' '}
            <Link className="App-link" to="fetch-data">
              useFetch
            </Link>
          </nav>
        </header>
        {children}
      </div>
      <Router>
        <Home path="/" />
        <TimeDelayCS delay={3000} path="/time-delay" />
        <WindowDimensionsCS path="/window-dim" />
        <FetchDataCS path="/fetch-data" />
        <FourOFour default />
      </Router>
    </>
  );
}

export default App;
