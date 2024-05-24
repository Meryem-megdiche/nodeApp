// models/inventory.js
const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  scannedEquipmentsCount: {
    type: Number,
    required: true,
  },
  technician: {
    type: String, // Vous pouvez remplacer cela par un ObjectId si vous avez un modèle de technicien
    required: true,
  }
});

module.exports = mongoose.model("Inventory", inventorySchema);
