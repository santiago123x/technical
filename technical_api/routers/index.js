const Router = require("express-promise-router");
const router = new Router();


const {
  getCattle,
  getCattleOwner,
  getCattleId,
  getCattleLocation,
} = require("../controllers/cattle");

const {
  getZones,
  getZoneCode,
  getZonesId,
  getZoneLocation,
  getAllInfo,
} = require("../controllers/zones");






//Cattles

router.get("/cattle", getCattle);
router.get("/cattleId/:id", getCattleId);
router.get("/cattleOwner/:owner", getCattleOwner);
router.get("/cattleLoca/:logn/:lat", getCattleLocation);


//Zones

router.get("/zones", getZones);
router.get("/zoneId/:id", getZonesId);
router.get("/zoneCode/:code", getZoneCode);
router.get("/zoneLoca/:logn/:lat", getZoneLocation);

//Info
router.get("/allInfo", getAllInfo);


module.exports = router;
