import express from 'express';
import { routesCategory } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.use('/categories', routesCategory);

app.listen(3333, () => console.log('Server is running...'));
