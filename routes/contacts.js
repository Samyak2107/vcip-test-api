const express = require("express");
const router = express.Router();
// const { check, validationResult, body } = require("express-validator");

/* Controllers */
const contactsController = require("../controllers/contacts");

router.post("/add", (req, res) => {
  contactsController.handleNewContact(req, res);
});

router.get("/list", (req, res) => {
  contactsController.handleGetAllContacts(req, res);
});

// router.post("/modify", (req, res) => {
//   productsController.handleModifyProduct(req, res);
// });

// router.post("/delete-product", (req, res) => {
//   productsController.handleDeleteProduct(req, res);
// });

// router.get("/get-categories", (req, res) => {
//   productsController.getExistingCategories(req, res);
// });

// router.put("/modify-db", (req, res) => {
//   productsController.handleProductModificationDb(req, res);
// });

module.exports = router;
