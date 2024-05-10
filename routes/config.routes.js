const express = require("express");
const router = express.Router();
const configCtrl = require("../controllers/config.controller");
const Config = require ("../models/config")
const Equip =require ("../models/equip")
router.get('/', async (req, res) => {
    try {
      const configs = await Config.find();
      res.json(configs);
    } catch (error) {
      console.error('Erreur lors de la récupération des configurations :', error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  });
  
router.post("/configs", configCtrl.apiCreateconfig);
router.get("/configs/:id", configCtrl.apiGetconfigById);
router.put("/configs/:id", configCtrl.apiUpdateconfig);
router.delete("/configs/:id", configCtrl.apiDeleteconfig);
router.get('/equip/:id', async (req, res) => {
  try {
    const equipId = req.params.id.trim(); // Supprime les espaces blancs, y compris les caractères de nouvelle ligne
    const equip = await Equip.findById(equipId);
    if (!equip) {
      return res.status(404).json({ message: 'L\'équipement spécifié n\'existe pas.' });
    }
    res.json(equip);
  } catch (error) {
    console.error('Error fetching equipment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;