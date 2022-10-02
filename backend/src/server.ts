import {config} from 'dotenv';

config();

import {buildApp} from './app';
import {checkConnection} from './database';

const PORT = 3000;

(async () => {
  const app = buildApp();

  await checkConnection();

  app.listen(PORT, () => {
    console.log(`Server started on ${ PORT }`);
  });
})();
