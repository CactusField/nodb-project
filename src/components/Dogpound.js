import React, {Component} from 'react';
import axios from 'axios';
import Dogpark from './Dogpark';



class Dogpound extends Component {
    constructor(props){
        super(props);
        this.state = {
            strayDog: []
        }
    }

    componentDidMount(){
        this.getStrayDog();
    }

    getStrayDog = () =>{
        axios.get('/api/stray-dogs')
        .then(res => {
            this.setState({strayDog: res.data})
        })
        .catch(err => console.log(err));
    }

    render(){
        console.log(this.state.strayDog)

        const mappedDogs = this.state.strayDog.map((dogs, i) => (
            <Dogpound
                key ={i}
                dogs = {dogs}
                buyFn = {this.props.buyFn}
                reloadFn ={this.getStrayDog} />
        ))
        return(
            <div className= 'dog-change'>
                {mappedDogs}
            </div>
        )
    }
}

export default Dogpound;