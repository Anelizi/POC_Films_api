import { Router } from "express";
import * as filmsController from "@/controllers/films-controllers";

const router = Router();

router.get("/films", filmsController.getFilms);
router.get("/films/platforms", filmsController.getByPlatform);
router.get("/films/genres", filmsController.getByGenre);
router.post("/films", filmsController.createFilms);
router.delete("/films/:id", filmsController.deleteFilms);
router.put("/films/:id", filmsController.updateFilms);

export default router;