module.exports = {
  getInventory: (req, res, next) => {
    const db = req.app.get("db");
    // console.log(db.get_inventory);
    db.get_inventory().then(inventory => res.status(200).send(inventory));
  },
  addProduct: (req, res, next) => {
    const db = req.app.get("db");
    // console.log(db.add_product);
    const { name, price, img } = req.body;
    // console.log(req.body);
    db.add_product([name, price, img]).then(() => res.sendStatus(200));
  },
  removeProduct: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    // console.log(id);
    db.remove_product(id).then(() => res.sendStatus(200));
  },
  update_product: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;
    // console.log(req.body);
    const { id } = req.params;
    db.update_product([id, name, price, img]).then(() => res.sendStatus(200));
  }
};
