import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();

app.use('/posts', postRoutes);

app.use(express.urlencoded({extended : true}));
app.use(express.json({ limit: "30mb", extended: true}));

app.use(cors());


//connecting to database 
const CONNECTION_URL = 'mongodb+srv://mdmostafa:mdmostafa@nodejs-authentication.4tkhl.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//using mongoose to connect to our database
mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));


//mongoose.set('useFindAndModify', false);