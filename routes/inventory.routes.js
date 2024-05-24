const express = require('express');
const router = express.Router();
const inventoryCtrl = require("../controllers/inventory.controller");
const authMiddleware = require("../middlewares/checkAuth");
router.post("/finish", authMiddleware,inventoryCtrl.apiFinishInventory);
router.get("/count/:date", inventoryCtrl.apiGetInventoryCountByDate);
router.get("/", inventoryCtrl.apiGetAllInventories);
module.exports = router;
