import Url, {UrlInput, UrlOutput} from "../models/url";


export const create = async(payload:UrlInput): Promise<UrlOutput> => {
    return await Url.create(payload);
}

export const findById = async(id:number): Promise<UrlOutput | null> => {
    const url =  await Url.findByPk(id);
    return url;
}

export const findByShortLink = async(shortUrl:string): Promise<UrlOutput | null> => {
    const url =  await Url.findOne({where: {shortUrl}})
    return url;
}

export const update = async(payload:Partial<UrlInput>): Promise<UrlOutput> => {
    const {id, shortUrl, longUrl} = payload;
    const [affectedCount, affectedRows] = await Url.update({shortUrl, longUrl}, {
        where: {id: id},
        returning: true
    });
    return affectedRows[0];

}

export const remove = async(id:number): Promise<boolean> => {
    const deletedUrlCount = await Url.destroy({
        where: {id}
    });
    return !!deletedUrlCount;
}

export const findAll = async(): Promise<UrlOutput[]> => {
    return await Url.findAll();
}