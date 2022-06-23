import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.json());

router
    .route('/')
    .get((req, res, next) => {
        req.time = new Date();
        next();
    }, (req, res) => {
        res.json({ 'unix': req.time.getTime(), 'utc': req.time.toUTCString() });
    });

router
    .route('/:date')
    .get((req, res, next) => {
        const inputDate = `${req.params.date}T00:00:00Z`
        req.time = new Date(inputDate)
        next()
    }, (req, res) => {
        res.json({ 'unix': req.time.getTime(), 'utc': req.time.toUTCString() });
    });

export default router;
