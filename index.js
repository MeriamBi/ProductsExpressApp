import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productRoutes from './routes/product.js';
import { errorHandler, notFoundError } from './middlewares/error-handler.js';


const app = express();

const port = 9090;

//Middlewares
app.use(cors());
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static('public/images'));

//Routes
app.use('/products', productRoutes);

//Custom middlewares
app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  })