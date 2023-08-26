const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');   // Import your API routes
const htmlRoutes = require('./routes/htmlRoutes'); // Import your HTML routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);   // Use your API routes
app.use('/', htmlRoutes);     // Use your HTML routes

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
