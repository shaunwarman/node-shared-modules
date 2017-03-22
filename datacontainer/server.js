const Express = require('express');

const App = Express();

const { APP_NAME, APP_PORT } = process.env;

App.get('/', (req, res) => {
  res.send('Hello there!');
});

App.get('/app', (req, res) => {
  res.send(`App name ${APP_NAME}`);
});

App.listen(APP_PORT, () => {
  console.log(`App started...`);
});
