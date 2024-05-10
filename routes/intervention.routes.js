const  express =  require("express");
const router = express.Router();
const interventionCtrl = require("../controllers/intervention.controller");
const { generateInterventionReport } = require('../services/reportService');


// Ajoutez ceci à votre route pour la récupération des interventions
router.get("/", interventionCtrl.apiGetAllInterventions);

// Ajoutez ceci au-dessus de votre route pour la récupération des interventions
console.log("Endpoint reached for fetching interventions");

router.post("/", interventionCtrl.apiCreateIntervention);
router.post("/equip", interventionCtrl.apiGetInterventionsByEquipment);
router.get("/interventions/:id", interventionCtrl.apiGetInterventionById);
router.put("/interventions/:id", interventionCtrl.apiUpdateIntervention);
router.delete("/interventions/:id", interventionCtrl.apiDeleteIntervention);
router.get("/search", interventionCtrl.apiSearchInterventions);
const Equip = require('../models/equip');
router.post('/api/reports/generate', async (req, res) => {
  try {
    const { startDate, endDate, equipmentIds } = req.body;
    const report = await generateInterventionReport(new Date(startDate), new Date(endDate), equipmentIds);
    res.json(report);
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).send('Internal Server Error');
  }
});
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
