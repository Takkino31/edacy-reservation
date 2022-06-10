import express from 'express'
import dotenv from 'dotenv'
import chalk from "chalk";
import Progress from 'progress'
import * as bodyParser from "express";
import {findAllReservation,findOneReservation,deleteOneReservation,insertOneReservation} from "./api/modules/reservations/reservation.controller.js";
import {findAllProduct,findOneProduct,deleteOneProduct,insertOneProduct} from "./api/modules/products/product.controller.js";
import {productRoutes} from "./api/modules/products/product.routes.js";
import {reservationRoutes} from "./api/modules/reservations/reservation.routes.js";
import {walk} from "./api/utils/files.js";
import {dirname} from "path"
import { fileURLToPath } from 'url'

dotenv.config()
const app = express()

/*console.log('hello node js')



const { DB_USERNAME, DB_PASS} = process.env
console.log(chalk.bgYellowBright(DB_USERNAME))
console.log(chalk.underline(DB_PASS))*/
/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));*/

productRoutes(app)
reservationRoutes(app)
/*AUTOLOAD*/
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
let routes  = walk(__dirname + '/api/modules')

for (let i = 0; i < routes.length; i++) {
    if (routes[i].indexOf('routes') !== -1){
        let element = (routes[i].split('/').pop()).split('.')[0]
        /*element+'Routes'(app)*/
    }
}


/*app.post('/reservations', (req, res) => {
    insertOneReservation(req.body);
    res.send(req.body);
})

app.get('/reservations', (req, res) => {
    const reservations = findAllReservation();
    res.send(reservations)
});

app.get('/reservations/:id', (req, res) => {
    const reservation = findOneReservation(req.params.id);
    res.send(reservation);
});
app.delete('/reservations/:id', (req, res) => {
    const result = deleteOneReservation(req.params.id);
    res.send(result);
});

app.post('/products', (req, res) => {
    insertOneProduct(req.body);
    res.send(req.body);
})

app.get('/products', (req, res) => {
    const products = findAllProduct();
    res.send(products)
})*/


app.listen(4000,()  =>{
    console.log('listen on port 4000')
})




/*const bar = new Progress(':bar', {total: 90})
const timer = setInterval(()=>{
    bar.tick()
    if (bar.complete){
        clearInterval(timer)
    }
},40)*/
/*const function2 = () => {
    console.trace()
}
const function1 = () => function2()

function1()*/
