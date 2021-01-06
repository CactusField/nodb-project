import react from 'react';

import dogs from './doggo';



const futuredogs = props => {
    const mappedDogs = props.boughtDogs.map((dogs, i) => (
    <Futuredogs
        key ={i}
        dogs = {dogs}
        nameFn = {props.nameFn}
        reloadFn ={props.sellFn} />
    ))
    return(
    <div>
        <h1>Playground</h1>
        <div className = 'dog-change'>
        {mappedDogs}
        </div>
    </div>
    )
}

export default futuredogs;