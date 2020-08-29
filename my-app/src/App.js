import React from 'react';
import './App.css';
import Navbar from "./componets/navbar"
import Wrapper from "./componets/wrapper"


function App() {
  return (
    <Wrapper>
      <Navbar componet={Navbar} />
    </Wrapper>

    
  );
}

export default App;
