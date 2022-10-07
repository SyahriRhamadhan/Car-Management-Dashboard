const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')
/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes)
/**
 * @description add car
 * @method GET /add-car
 */
route.get('/add-car', services.add_car)
/**
 * @description update car
 * @method GET /add-car
 */
route.get('/update-car', services.update_car)

//API
route.post('/api/cars', controller.create)
route.get('/api/cars', controller.find)
route.put('/api/cars/:id', controller.update)
route.delete('/api/cars/:id', controller.delete)
module.exports= route