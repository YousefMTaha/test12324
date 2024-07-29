import express from 'express'
import customerRouter from './modules/customers/customers.routes.js'
import productsRouter from './modules/products/products.routes.js'
import ordersRouter from './modules/orders/orders.routes.js'
import cors from "cors"

const app = express()
const port =process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use('/auth', customerRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)
app.use('/',(req, res) =>{
    res.json({message:"hello world"})
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))