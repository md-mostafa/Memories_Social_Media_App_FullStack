import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(express.urlencoded({extended : true}));
app.use(express.json({ limit: "30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Akash is the best');
})

//connecting to mongodb

const PORT = process.env.PORT || 5000;

//using mongoose to connect to our database
mongoose.connect(process.env.CONNECTION_URL, { 
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));


//mongoose.set('useFindAndModify', false);