const axios = require('axios');
const app = require('./app');
const connection = require('./database/config/connection');

const getProducts = (category) => {
  axios
    .get(
      `https://serpapi.com/search.json?engine=home_depot&q=${category}&api_key=f392cf3a53eed16538710342a1ad87a806076de514a4d99fb478bd9dd7f8777f`,
    )
    .then(({ data: { products } }) => {
      // eslint-disable-next-line array-callback-return
      products.map((product) => {
        // ? exclude product's names that starts with a number
        if (!Number.isNaN(parseInt(product.title.slice(0, 1), 10))) {
          return;
        }
        const productName = `${category} ${product.title.slice(0, 5)}`;
        const productDescription = `${product.title.repeat(10)}`;
        const imgUrl = product.thumbnails[0][6];
        const { price } = product;

        connection.query(
          `insert into products (name, description, image, category, price)
        values (
            $1,
            $2,
            $3,
            $4,
            $5
          )`,
          [productName, productDescription, imgUrl, category, price],
        );
      });
    });
};
const categories = ['bed', 'living room', 'kitchen', 'sofa', 'chair'];

// categories.forEach((category) => getProducts(category));

app.listen(app.get('port'), () => console.log(`http://localhost:${app.get('port')}`));
