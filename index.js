const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.text(new Date());
});

app.post('/', (req, res) => {
  res.text('POST');
});

app.put('/', (req, res) => {
  res.text('PUT');
});

app.delete('/', (req, res) => {
  res.text('DELETE');
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server is running on port ${PORT}`);
});
