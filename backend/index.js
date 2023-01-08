import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import menuRouter from './routes/menu.js';

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is live');
})

app.use('/', menuRouter);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = 'mongodb://hadia:hadia123@ac-rrzdk3i-shard-00-00.fy3tf9p.mongodb.net:27017,ac-rrzdk3i-shard-00-01.fy3tf9p.mongodb.net:27017,ac-rrzdk3i-shard-00-02.fy3tf9p.mongodb.net:27017/?ssl=true&replicaSet=atlas-2otvvy-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))
