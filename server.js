const express = require("express");
const db = require("./db.js")

const Pizza = require('./models/pizzaModel')


const app = express();



app.use(express.json());
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)



    app.get("/" , (req, res)=>{

        res.send("Server working 🔥"+ port );

    });



const port = process.env.PORT || 4000;

app.listen(port, () => 'Server running on port port 🔥')






