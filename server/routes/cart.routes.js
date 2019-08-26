const express = require("express");
const cartRoutes = express.Router();
const cart = require("./cart-items");

cartRoutes.get("/cart-items", (req, res) => {
  res.send(cart);
});
cartRoutes.post("/cart-items", (req, res) => {
  res.send(req.body);
});

cartRoutes.put("/cart-items/:id", (req, res) => {
  const index = cart.findIndex(cart => cart.id === req.params.id);
  // cart.splice(index, 1, req.body);
  res.send(req.body, req.params.id);
});
cartRoutes.delete("/cart-items/:id", (req, res) => {
  console.log(req.params.id);
  res.end();
});

module.exports = cartRoutes;
