import { Request, Response, NextFunction } from "express";


class ErrorMiddleware {

    static serverError(err:any, res:Response){
        const status = err.status ? err.status : 400;
        res.status(status).json({
            status: 'failed',
            message: err.message || 'Internal Server Error',
            data: null
        })
    }

    static notFound  (req : Request, res: Response, next: NextFunction){
        const error = new Error(`Not found ${req.originalUrl}`)
        res.status(404)
        next(error)
    }

    static errorHandler(message: string, status: number) {
        const error: any = new Error(message);
        error.status = status;
        throw error;
    }
}

export default ErrorMiddleware;