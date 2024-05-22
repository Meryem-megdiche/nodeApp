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
  }],
  dateScanned: {
    type: Date,
    default: null,
  },
  scannedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  }
});

module.exports = mongoose.model("Equip", equipSchema);
