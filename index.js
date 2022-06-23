import express from 'express';
import apiRoutes from './routes/api.js'
import 'dotenv/config'
import cors from 'cors';

const app = express();
app.use(cors({optionsSuccessStatus: 200}));

//ROUTES
app.route('/')
    .get((req, res) => {
        res.redirect('/api')
    })

app.use('/api', apiRoutes)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Your app is running on: http://localhost:${process.env.PORT}`)
})
