import Url, {UrlInput, UrlOutput} from "../models/url";


export const create = async(payload:UrlInput): Promise<UrlOutput> => {
    return await Url.create(payload);
}

export const getById = async(id:number): Promise<UrlOutput> => {
    const url =  await Url.findByPk(id);
    if(!url){
        throw new Error('No URL found.');
    }
    return url;
}

export const update = async(id:number, payload:Partial<UrlInput>): Promise<UrlOutput> => {
    const url = await Url.findByPk(id);
    if(!url){throw new Error('No URL found.');}
    return await url.update(payload);
}

export const remove = async(id:number): Promise<boolean> => {
    const deletedUrlCount = await Url.destroy({
        where: {id}
    });
    return !!deletedUrlCount;
}

export const getAll = async(): Promise<UrlOutput[]> => {
    return await Url.findAll();
}