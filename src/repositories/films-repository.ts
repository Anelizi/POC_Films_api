import connection from "@/database";
import { Films, FilmsEntity } from "@/protocols/films";
import { QueryResult } from "pg";

export async function createFilms(films:FilmsEntity): Promise<QueryResult<FilmsEntity>>{
    return connection.query(`
    INSERT INTO films (name, platform, gender, status, note, summary)
    VALUES ($1, $2, $3, $4, $5, $6)
    `, [films.name, films.platform, films.gender, films.status, films.note, films.summary])
}

export async function findFilmsName(name:string) {
    return connection.query<Films>(`
        SELECT * FROM films WHERE name = $1
    `,[name]);
}

export async function findFilms(): Promise<QueryResult<FilmsEntity>>{
    return connection.query(`
        SELECT * FROM films;
    `);
}