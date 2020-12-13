const express = require('express');
const data = require("./mock/data");
const cors = require('cors');


const app = express();
app.use( express.json() );
app.use(cors());


app.get("/api/products", (req, res) => {
    res.json(data.products)
})

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const product = data.products.filter((product) => product.id === id)[0];
    if(product){
        res.json(product);
    }
    else
        res.status(404).json({msg: "Product not found"});
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})