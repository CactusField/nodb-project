import {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Dogpound from './components/Dogpound';
import Futuredogs from './components/Futuredogs';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boughtDogs: []
    }
    this.catchDogs = this.catchDogs.bind(this);
  }


componentDidMount(){
  axios.get('/api/bought-dogs')
  .then( res => {
    this.state({boughtDogs: res.data})
  })
  .catch(err => console.log(err));
}


catchDogs(dogs) {
  axios.post('/api/bought-dogs', {dogs: dogs})
  .then(res => {
    this.setState({boughtDogs: res.data})
  })
  .catch(err => console.log(err));
}

editName = () =>{

}

render(){
  return (
    <div className='App'>
    <Header />
    <DogPound buyFn ={this.buyDogs} />
    <Futuredogs 
    boughtDogs = {this.state.boughtDogs}
    nameFn = {this.editName}
    sellFn = {this.sellDog} />
    </div>
    )
  }
}






export default App;
