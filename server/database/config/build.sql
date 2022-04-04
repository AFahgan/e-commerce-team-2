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
insert into products (name, description, image, category, price)
values (
    'green couch',
    'Cool hipster green couch sofa with brown wooden legs on wooden floor',
    'https://i.imgur.com/ZDUr9aN.jpg',
    'sofa',
    123.23
  ),
  (
    'leather couch',
    'Cool hipster green couch sofa with brown wooden legs on wooden floor',
    'https://i.imgur.com/NtI1r65.png',
    'sofa',
    90.55
  ),
  (
    'silver couch',
    'Cool hipster green couch sofa with brown wooden legs on wooden floor',
    'https://i.imgur.com/WQlr2sS.png',
    'sofa',
    80.33
  ),
  (
    'brown couch',
    'Cool hipster green couch sofa with brown wooden legs on wooden floor',
    'https:/i.imgur.com/fpMeT8a.png',
    'sofa',
    30.23
  ),
  (
    'white chair',
    'Cool hipster green chair with brown white legs on wooden floor',
    'https:/i.imgur.com/fpMeT8a.png',
    'chair',
    30.23
  ),
  (
    'purple chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/xJiV5U1.png',
    'chair',
    20.13
  ),
  (
    'fancy chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/kSPqT8c.png',
    'chair',
    20.13
  ),
  (
    'brown chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/RoHIo7B.png',
    'chair',
    70.13
  ),
  (
    'black chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/ElcPA7s.png',
    'chair',
    20.13
  ),
  (
    'small chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/O9qL2L9.png',
    'chair',
    10.13
  );
COMMIT;