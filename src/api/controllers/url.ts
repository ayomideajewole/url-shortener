import { Request, Response } from "express";
import ErrorMiddleware from "../../middleware/error";
import { UrlService } from "../services/url";

const urlService = new UrlService()

export default class UrlController{
    constructor(){}

    async convertUrl(req:Request, res:Response): Promise<void> {
        try {
            if(!req.body.longUrl){
                res.status(400).send({message: 'Kindly include url!'})
            }

            const convertedUrl = await urlService.shortenUrl(req.body);
            res.status(200).json({
                status: 'success',
                message: 'URL converted sucessfully!',
                data: convertedUrl
            })
        } catch (ex) {
            return ErrorMiddleware.serverError(ex, res);
        }
    }

    async useShortenedLink(req:Request, res:Response): Promise<void> {
        try {
            const longUrl = await urlService.getUrlByShortLink(req.params.shortUrl);
            res.redirect(longUrl);      
        } catch (ex) {
            return ErrorMiddleware.serverError(ex, res);
        }
    }
}