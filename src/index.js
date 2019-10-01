import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar';
import Main from './components/Main';

import './styles/index.css';
import './styles/tailwind.css';

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <Main />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
