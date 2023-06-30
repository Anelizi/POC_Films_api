CREATE TABLE films (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  platform VARCHAR NOT NULL,
  gender VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  note DECIMAL,
  summary VARCHAR
);

INSERT INTO films (name, platform, gender, status, note, summary)
VALUES ('O Senhor dos Anéis: A Sociedade do Anel', 'Prime', 'Fantasia', 'Assistido', 9.2, 'Um grupo de heróis se une para destruir um anel maligno e salvar a Terra-média.');