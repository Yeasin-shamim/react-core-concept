import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const arra = ["shamim", "Yeasin", "sayma", "fardaus"]
  const products = [
    {name: 'Photoshop', price: '$90.08'}, 
    {name: 'Ilistarator', price: '$80.9'}, 
    {name: 'PDF reader', price: '$10'},
    {name: 'Premium pro', price: '$120'}
  ]
  
  return (
    <div className="App">
      <header className="App-header"> 
      <p>I am a react person</p>
      <Count></Count>
      <UserData></UserData>
        <div>
          <ul>
            {
              arra.map(nayok => <li>{nayok}</li>)
            }
            {
              products.map(product => <li>{product.name}</li>)
            }
          </ul>
          {
            products.map(produ => <Product product ={produ}></Product>)
          }
          </div>
          <Person name = {arra[1]}  nayika = "Shabnur"></Person>
          <Person name = "Hafiz al" nayika = "Shabana"></Person>
          <Person name = "Shamim" nayika = "Sayma"></Person> 
      </header>
    </div>
  );
}
function UserData(){
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])
  return (
    <div>
      <h3>Dynamic user: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      
    </div>
  );
}

function Count(){
  const [count, setCount] = useState(10);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onMouseLeave={() => setCount(count - 1)}>Decriease</button>
    </div>
  )
  }



function Product(props){
  const style = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'green',
    color: 'black',
    boxShadow: '-3px -3px 15px white',
    padding: '20px',
    height: '200px',
    width: '200px',
    margin: '20px'
  }
const {name, price} = props.product;
  return (
    <div style = {style}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
function Person(props){
  const style = {
    border: '2px solid red',
    margin: '10px',
    boxShadow: '(-5px 5px) (-5px 5px) 10px white',
    width: '400px'
  }
  return (
    <div style = {style}>
      <h1>Nayok: {props.name}</h1>
      <h4>Hero of {props.nayika}</h4>
    </div>
  );
}

export default App;
