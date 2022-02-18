import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        setUsers(res.data);
      }).catch(err => console.error(err))
  })
  return (
    <div className="App">
      <h1 className="Header">Welcome to Jar Jar Book</h1>
    </div>
  );
}

export default App;
