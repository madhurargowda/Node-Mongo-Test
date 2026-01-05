const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb+srv://medhini2004m_db_user:4f540hsmsDEnPxLC@cluster0.aureuvb.mongodb.net/?appName=Cluster0/persondb?retryWrites=true&w=majority'
);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const personRoutes = require('./routes/personRoutes');
app.use('/', personRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
