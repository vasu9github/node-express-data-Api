import express from 'express';
import data from './routes/data.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';


const PORT = 5000;

const app = express();

app.use(express.json());
// routes

app.use('/api/data',data);


//error handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`Server is running at the Port : ${PORT}`); 
});