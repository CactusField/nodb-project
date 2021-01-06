const boughtDogs = [];
let id = 1;


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

    },
    sellDog: (req,res) => {

    },
}