import connection from "@/database";
import { Films, FilmsEntity } from "@/protocols/films";
import { QueryResult } from "pg";

export async function createFilms(
  films: FilmsEntity
): Promise<QueryResult<FilmsEntity>> {
  return connection.query(
    `
    INSERT INTO films (name, platform, gender, status, note, summary)
    VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [
      films.name,
      films.platform,
      films.gender,
      films.status,
      films.note,
      films.summary,
    ]
  );
}

export async function findFilmsName(name: string) {
  return connection.query<Films>(
    `
        SELECT * FROM films WHERE name = $1
    `,
    [name]
  );
}

export async function findFilms(): Promise<QueryResult<FilmsEntity>> {
  return connection.query(`
        SELECT * FROM films;
    `);
}

export async function findFilmsById(id: number) {
  const result = await connection.query(
    `
        SELECT * FROM films WHERE id = $1;
    `,
    [id]
  );
  return result;
}

export async function deleteFilms(id: number) {
  await connection.query(
    `
        DELETE FROM films WHERE id = $1
    `,
    [id]
  );
}

export async function updateFilms(
  id: number,
  films: Films
): Promise<QueryResult<FilmsEntity>> {
  return connection.query(
    `
        UPDATE films SET name = $1, platform = $2, gender = $3, status = $4, note = $5, summary = $6
        WHERE id = $7
    `,
    [
      films.name,
      films.platform,
      films.gender,
      films.status,
      films.note,
      films.summary,
      id,
    ]
  );
}
