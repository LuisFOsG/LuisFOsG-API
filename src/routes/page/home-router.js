import { Router } from 'express';
import app from '../../app';

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json(
        {
            name: app.get("pkg").name,
            description: app.get("pkg").description,
            author: app.get("pkg").author,
            version: app.get("pkg").version
        }
    );
});

module.exports = router;
