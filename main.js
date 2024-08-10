import express from 'express';
import routes from './routes';

const app = express();

app(routes);

app.listen(3005, () => console.log('Servidor corriendo http://localhost:3005'));