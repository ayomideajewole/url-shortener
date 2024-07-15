import { UrlInput, UrlOutput } from "../../db/models/url";
import * as urlDal from '../../db/dal/url';


export class UrlService{
    constructor(){}

    public async convertUrl(payload:UrlInput): Promise<UrlOutput> {
        const data = urlDal.create(payload);
        return data;
    }

    public async update(payload:UrlInput): Promise<UrlOutput> {
        const data = urlDal.update(payload);
        return data;
    }

    public async findByShortLink(shortUrl:string): Promise<UrlOutput | null> {
        const data = urlDal.findByShortLink(shortUrl);
        return data;
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