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
        if (req.params.date.length === 13) {
            req.info = parseInt(req.params.date)
            next()
        }
        req.info = `${req.params.date}T00:00:00Z`
        next()
    },(req, res) => {
        const date = new Date(req.info)
        if (date.toString() === 'Invalid Date') {
            res.json({ error: date.toString() })
        } else {
            res.json({ 'unix': date.getTime(), 'utc': date.toUTCString() });
        }
    });

export default router;
