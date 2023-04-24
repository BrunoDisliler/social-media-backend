import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-route';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONN = process.env.DB_CONN;

app.use(express.json());
app.use('api/user', router);
app.use('/api/blog', blogRouter);

mongoose
	.connect(DB_CONN)
	.then(() => console.log('Connected to database'))
	.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
