
const axios = require('axios');

module.exports = {
    getStrayDog: (req, res) =>{
        const dogArray = [];

        const randdog1 = Math.ceil(Math.random()* 200),
              randdog2 = Math.ceil(Math.random()* 200);


        axios.get(`https://dog.ceo/api/breeds/list/all/${randdog1}`)
        .then(res => {
            dogArray.push(response.data);
            axios.get(`https://dog.ceo/api/breeds/list/all/${randdog2}`)
            .then(res =>{
                dogArray.push(response.data);
                res.status(200).send(dogArray)
            })
        })  
        .catch(err => res.status(500).send(err));    
    }
}