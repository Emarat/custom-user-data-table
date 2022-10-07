import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import UsersData from './Components/UserData/UsersData';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <UsersData></UsersData>
    </div>
  );
}

export default App;
