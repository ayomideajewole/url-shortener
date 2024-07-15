import url from "../api/routes/url";


function routes(app:any){
    app.use('/', url);
}


export default routes;