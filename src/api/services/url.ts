import { UrlInput, UrlOutput } from "../../db/models/url";
import * as urlDal from '../../db/dal/url';
import { nanoid } from "nanoid"; 
import ErrorMiddleware from "../../middleware/error";

export class UrlService{
    constructor(){}

    public async shortenUrl(payload:UrlInput): Promise<string> {
        const shortUrl = nanoid(10);
        const data = await urlDal.create({...payload, shortUrl});
        const fullShortUrl = `${process.env.BASE_URL}/${shortUrl}`;
        return fullShortUrl;
    }

    public async update(payload:UrlInput): Promise<UrlOutput> {
        const data = urlDal.update(payload);
        return data;
    }

    public async getUrlByShortLink(shortUrl:string): Promise<string> {
        const data = urlDal.findByShortLink(shortUrl) as unknown as UrlOutput;
        if(!data){
            ErrorMiddleware.errorHandler('Url not found!', 404)
        }
        return data.longUrl;
    }

    public async deleteUrl(id:number): Promise<Boolean> {
        const data = urlDal.remove(id);
        return data;
    }

    public async findUrlById(id:number): Promise<UrlOutput | null> {
        const data = urlDal.findById(id);
        return data;
    }

    public async findAllUrls(): Promise<UrlOutput[]> {
        const data = urlDal.findAll();
        return data;
    }
}