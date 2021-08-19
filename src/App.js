import React, { useState,useEffect } from 'react';
import './App.css';

function App() { 
  const [userrrrr, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, []) 
  return (
    <div className="App">
      <MovieCount></MovieCount>
      {
        userrrrr.map(users => <UserData name={users.name} email={users.email}></UserData>)
      }
      <header className="App-header">
      </header>
    </div>
  );
}
function UserData(props){
  return (
    <div style={{border:'2px solid cyan', margin: '20px'}}>
      <h2>User Name: {props.name}</h2>
      <h5>User Email: {props.email}</h5>
    </div>
  )
}

function MovieCount(){
  const [count, setCount] = useState(1);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick= {handleClick}>Add Movie</button>
      <h3>Total movie:{count} </h3>
      <MovieDisplay movie= {count}></MovieDisplay>
      <MovieDisplay movie= {count + 5}></MovieDisplay>
      <MovieDisplay movie= {count + 10}></MovieDisplay>
      <MovieDisplay movie= {count + 3}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return <h3>Movies i have acted:{props.movie} </h3>
}

export default App;
