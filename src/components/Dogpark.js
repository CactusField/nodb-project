import React, {Component} from 'react';



class Dogpark extends Component {
    render(){
        return(
            <div onClick={this.handleCatch}>
                <p>{this.props.dogs.name}</p>
            </div>
        )
    }
}

export default Dogpark;