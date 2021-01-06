import React, {Component} from 'react';

class doggo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            nameInput: ""
        }
    };
}
export default doggo;