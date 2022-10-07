var Cardb = require('../model/model')

//create and save new car
exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empety"})
        return;
    }

    //new car
    const car = new Cardb({
        image:req.body.image,
        name:req.body.name,
        price:req.body.price,
        size:req.body.size
    })
    //save car in database
    car
        .save(car)
        .then(data =>{
            //res.send(data)
            res.redirect('/add-car')
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Some error came while create a user"
            })
        })
}

//retrive and return all cars or a single car
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id
        Cardb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "not foun user with id"+id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({message: "error retrieving user with id "+id})
            })
    }else{
        Cardb.find()
        .then(car =>{
            res.send(car)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error while try finding data"})
        })
    }
}

//update a new identified car by car id
exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update can not be empty"})
    }
    const id = req.params.id
    Cardb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot Update User with ${id}, maybe User not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "Error Updater user information"})
    })
}

//delete a new identified car by car id
exports.delete = (req, res)=>{
    const id = req.params.id

    Cardb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message : `Cannot Delete user id: ${id}, Maybe ID typo`})
        }else{
            res.send({
                message:"user wad deleted"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete user with id=" +id
        })
    })
}