import express from 'express';
import UrlController  from '../controllers/url';

const urlController = new UrlController();
const router = express.Router();

router.post('/', [
    urlController.convertUrl
]);

router.get('/:shortUrl', [
    urlController.useShortenedLink
]);

export default router;