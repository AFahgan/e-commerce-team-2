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
    'https://i.imgur.com/al3KD2J.png?1',
    'chair',
    15.23
  ),
  (
    'purple chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/xJiV5U1.png?1',
    'chair',
    200.13
  ),
  (
    'fancy chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/kSPqT8c.png?1',
    'chair',
    20.13
  ),
  (
    'brown chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/RoHIo7B.png?1',
    'chair',
    70.13
  ),
  (
    'black chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/ElcPA7s.png?1',
    'chair',
    20.13
  ),
  (
    'small chair',
    'Cool hipster brown chair with brown white legs on wooden floor',
    'https://i.imgur.com/O9qL2L9.png?1',
    'chair',
    10.13
  ),
  (
  'great disk',
  'Cool hipster brown disk with brown white legs on wooden floor',
  'https://i.imgur.com/0JavHHv.png?1',
  'chair',
  20.13
),
(
  'brown disk',
  'Cool hipster brown disk with brown white legs on wooden floor',
  'https://i.imgur.com/63uU8HU.png?1',
  'chair',
  50.13
),
(
  'lovely chair',
  'Cool hipster brown disk with brown white legs on wooden floor',
  'https://i.imgur.com/p6E5YPw.png?1',
  'chair',
  130.13
);
COMMIT;