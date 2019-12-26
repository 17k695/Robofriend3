import React from 'react';
//  import logo from './logo.svg';
import './App.css';
import {CardList} from './component/cardList/cardList.js'
class App extends React.Component
{
  constructor(){
    super()
    this.state={users:[],
      searchField:" "}
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>this.setState({users:data}),console.log(this.state.users));
  }
  render()
  {
    
    const filteredRobot=this.state.users.filter(users=>
    {
      return users.name.toLowerCase().includes(this.state.searchField)
    });
    
    return(
      <div className="App">
    <h1>ROBO FRIENDS</h1>
    <input type="text" placeholder="Search Robots" onChange={(e)=>this.setState({searchField:e.target.value})}/>
    
    <CardList users={filteredRobot} />
    
    
    
    
    </div>
    
    );
  }
}
export default App;

