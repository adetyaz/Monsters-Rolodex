import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list'
import {SearchBox } from './components/search-box/search'


class App extends Component{
  constructor(props){
      super(props);

      this.state = {
        monsters: [],
        searchField: ''
      }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users}))

  }
 

  handlechange = (e)=>{
    {this.setState({searchField: e.target.value})}
  }


  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return(
          <div className="App">
              <SearchBox
                placeholder='search monsters'
                handlechange = {this.handlechange}
              />
             <CardList monsters = {filteredMonsters}/>
          </div>
      )
  }
}


export default App;
