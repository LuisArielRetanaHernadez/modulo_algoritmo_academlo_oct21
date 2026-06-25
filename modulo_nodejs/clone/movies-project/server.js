const { app } = require('./app');

// Utils
const { bd } = require('./util/database');

// Database authenticated
bd
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

// Database synced with models' relations
bd
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

// Spin up server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
