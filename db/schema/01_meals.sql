DROP TABLE IF EXISTS meals CASCADE;
CREATE TABLE meals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL,
);