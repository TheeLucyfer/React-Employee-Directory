import React, { useState } from 'react';
import './App.css';
import Navbar from "./componets/navbar"
import Wrapper from "./componets/wrapper"
import Body from "./componets/body"
import { render } from '@testing-library/react';
import friends from "./friends.json";



function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
