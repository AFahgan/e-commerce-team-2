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
INSERT INTO products (id, name, description, image, category, price) VALUES (1, 'men t-shirt ', 'Lorem Ipsum has been the industrys standard dummy text', 'https://hips.hearstapps.com/vader-prod.s3', 'men', 125.25), (2, 'women t-shirt ', 'took a galley of type and scrambled it to make a type', 'https://hips.hearstapps.com/vader-prod.s3', 'women', 125.25);

COMMIT;