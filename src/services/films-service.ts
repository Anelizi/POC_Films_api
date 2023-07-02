import { Films, FilmsEntity } from "@/protocols/films";
import * as filmsRepository from "@/repositories/films-repository";
import * as erro from "@/errors/index";

export async function createFilms(films: FilmsEntity) {
  const { rowCount } = await filmsRepository.findFilmsName(films.name);
  if (rowCount) throw erro.duplicatedAnimeError(films.name);
  await filmsRepository.createFilms(films);
}

export async function findFilms(): Promise<FilmsEntity[]> {
  const { rows } = await filmsRepository.findFilms();
  return rows;
}

export async function deleteFilms(id: number) {
  const { rowCount } = await filmsRepository.findFilmsById(id);
  if (rowCount === 0) throw erro.notFoundError();

  await filmsRepository.deleteFilms(id);
}

export async function updateFilms(id: number, films: Films) {
  const { rowCount } = await filmsRepository.findFilmsById(id);
  if (rowCount === 0) throw erro.notFoundError();

  await filmsRepository.updateFilms(id, films);
}
