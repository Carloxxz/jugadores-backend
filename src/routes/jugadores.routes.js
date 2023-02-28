const { Router } = require("express");
const {
  getPlayers,
  createPlayer,
  deletePlayer,
} = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utirlizar la constante y le asignamos su controlador
router.get("/carlos", getPlayers);
router.post("/carlos", createPlayer);
router.delete("/carlos/:id", deletePlayer);

module.exports = router;