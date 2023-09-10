import './App.css';
import React from 'react';
import { DataBaseTitle } from './resources/DataBaseTitle';
import { UserName } from './resources/UserName';
import { UserPassword } from './resources/UserPassword';
import { LoginButton } from './resources/LoginButton';

function App() {
  return (
    <>
      <DataBaseTitle/>
      <UserName/>
      <UserPassword/>
      <LoginButton/>
    </>
  );
}

export default App;