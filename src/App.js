import React from 'react';

// import './App.scss';
import './scss/styles.scss';
import Header from './components/Organisms/Header';
import Main from './components/Organisms/Main';
import Footer from './components/Organisms/Footer';

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </nav> */}
      <Header />
      <Main />
      <Footer /> 
    </div>
  );
}

export default App;
