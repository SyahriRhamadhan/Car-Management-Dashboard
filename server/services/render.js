const axios = require('axios')
exports.homeRoutes =(req, res) =>{
    //make a get request to /api/cars
    axios.get('http://localhost:3000/api/cars')
        .then(function(response){
            res.render('index', {cars: response.data})
        })
        .catch(err =>{
            res.send(err)
        })
}
exports.add_car =(req, res) =>{
    res.render('add_car')
}
exports.update_car =(req, res) =>{
    axios.get('http://localhost:3000/api/cars', {params:{id:req.query.id}})
        .then(function(cardata){
            res.render("update_car", {car:cardata.data})
        })
        .catch(err =>{
            res.send(err)
        })
    
    // res.render('update_car')
}
