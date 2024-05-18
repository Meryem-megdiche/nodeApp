const  express =  require("express");
const router = express.Router();
const equipCtrl = require("../controllers/equip.controller");


router.get("/", equipCtrl.apiGetAllequips);
router.post("/add", (req, res) => {
  console.log("POST request to add");
  equipCtrl.apiCreateequip(req, res);});
   
  router.get("/equip/:id", equipCtrl.apiGetequipById);

router.put("/equip/:id", equipCtrl.apiUpdateequip);
router.delete('/:id', equipCtrl.apiDeleteequip);
router.get("/find/:rfid", equipCtrl.apiGetEquipByRfid);

router.get("/equips", async (req, res) => {
  try {
    console.log('Fetching all equipments from database...');
    const equips = await Equip.find();
    console.log('Equipments fetched:', equips);
    res.json(equips);
  } catch (error) {
    console.error('Error fetching equipments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.put("/equips/:id", async (req, res) => {
  try {
    console.log(`Updating equipment with ID: ${req.params.id}`);
    const updatedEquip = await Equip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedEquip) {
      console.log('Updated equipment:', updatedEquip);
    }
    res.json(updatedEquip);
  } catch (error) {
    console.error('Error updating equipment:', error);
    res.status(500).json({ error: error.message });
  }
});
module.exports =  router;