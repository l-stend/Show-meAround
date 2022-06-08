const express = require('express');
const cors = require('cors');
const router = require('./router');

const PORT = 3090;

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

(async () => {
  try {
    app.listen(PORT, () => {
      console.log('🦝🦝 server running 🦝🦝');
    });
  } catch (error) {
    console.log(error);
  }
})();
