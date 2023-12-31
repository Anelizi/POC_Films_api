import { Films, FilmsEntity } from "@/protocols/films";
import { Request, Response } from "express";
import httpStatus from "http-status";
import * as filmsService from "@/services/films-service";

export async function getFilms(req: Request, res: Response) {
  try {
    const films = await filmsService.findFilms();
    res.status(httpStatus.OK).send(films);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
}

// se der tempo fazer o getByPlatform e getByGenre
// export async function getByPlatform(req: Request, res: Response){

// }

// export async function getByGenre(req: Request, res: Response){

// }

export async function createFilms(req: Request, res: Response) {
  const recipe = req.body as FilmsEntity;
  try {
    await filmsService.createFilms(recipe);
    res.status(httpStatus.CREATED).send();
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ error: "Internal server error" });
  }
}

export async function deleteFilms(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await filmsService.deleteFilms(Number(id));

    res.status(httpStatus.OK).send("Successfully Deleted");
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ error: "Internal server error" });
  }
}

export async function updateFilms(req: Request, res: Response) {
  const { id } = req.params;
  const recipe = req.body as FilmsEntity;
  try {
    await filmsService.updateFilms(Number(id), recipe);

    res.status(httpStatus.OK).send("Successfully Edited");
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ error: "Internal server error" });
  }
}
