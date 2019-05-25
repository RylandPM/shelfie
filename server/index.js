require("dotenv").config();
const express = require("express");
const massive = require("massive");
const controller = require("./controller");

const app = express();
app.use(express.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("connected to db");
  })
  .catch(err => console.log(err));

app.get("/api/inventory", controller.getInventory);
app.post("/api/product", controller.addProduct);
app.put("/api/inventory/:id", controller.update_product);
app.delete("/api/inventory/:id", controller.removeProduct);

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
