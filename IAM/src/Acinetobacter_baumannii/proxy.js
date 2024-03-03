const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/proxy', async (req, res) => {
  const { url } = req.query;

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
