import app from './server';
import './db';
import config from '../config.json';

// Start the application by listening to specific port
const port = Number(process.env.PORT || config.PORT || 7777);
app.listen(port, () => {
  console.info('Express application started on port: ' + port);
});
