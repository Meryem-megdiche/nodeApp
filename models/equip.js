const mongoose = require("mongoose");

const equipSchema = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  AdresseIp: {
    type: String,
    required: true,
  },
  RFID: {
    type: String,
    required: true,
  },
  Emplacement: {
    type: String,
    required: true,
  },
  Etat: {
    type: String,
    required: false,
  },
  ConnecteA: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equip'
  }]
});

module.exports = mongoose.model("Equip", equipSchema);
