BEGIN;
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  price DECIMAL NOT NULL
);

COMMIT;