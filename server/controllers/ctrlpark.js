const boughtDogs = [];
let message = 1;


module.exports = {
    getBoughtDogs: (req,res) => {
            res.status(200).send(boughtDogs);
    },
    buyDogs: (req,res) => {
        const {dogs} = req.body;

        dogs.message = message;
        message++;
        
        boughtDogs.push(dogs);
        res.status(200).send(boughtDogs);
    },
    editName: (req,res) => {
        const {message} = req.params,
              {name} = req.body;
        const dogs = boughtDogs.find(element=>element.id === +message);
        dogs.name = name;
        res.status(200).send(boughtDogs);
    },
    sellDog: (req,res) => {
        const {message} = req.params;

        const index = boughtDogs.findIndex(element =>element.id === +message)
        boughtDogs.splice(index, 1);
        res.status(200).send(boughtDogs);
    },
}