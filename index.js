const express = require('express');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static('public'));


app.post('/submit', (req, res) => {

  const { firstName, lastName, email } = req.body;


  res.send(`First Name: ${firstName}<br>Last Name: ${lastName}<br>Email: ${email}`);
});


app.listen(3000)
