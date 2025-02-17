const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (req.is('application/json')) {
    console.log(req.body);
    res.send('OK');
  } else {
    res.status(400).send('Invalid Content-Type');
  }
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});