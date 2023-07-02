import { Films, FilmsEntity } from "@/protocols/films";
import * as filmsRepository from "@/repositories/films-repository"

export async function createFilms(films:FilmsEntity) {
    const { rowCount } = await filmsRepository.findFilmsName(films.name);
    await filmsRepository.createFilms(films);
}

export async function findFilms(): Promise<FilmsEntity[]> {
    const { rows } = await filmsRepository.findFilms();        
    return rows;
}