import { Router } from "express";
import * as filmsController from "@/controllers/films-controllers";
import { validateSchema } from "@/middlewares/validation-middlewares";
import { filmsSchema } from "@/schemas/films-schemas";

const router = Router();

router.get("/films", filmsController.getFilms);
// router.get("/films/platforms", filmsController.getByPlatform);
// router.get("/films/genres", filmsController.getByGenre);
router.post("/films",validateSchema(filmsSchema), filmsController.createFilms);
router.delete("/films/:id", filmsController.deleteFilms);
router.put("/films/:id", filmsController.updateFilms);

export default router;