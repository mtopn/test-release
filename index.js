const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server is running on port ${PORT}`);
});
