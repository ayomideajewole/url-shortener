
require('dotenv').config();
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import startup from './middleware/routes';
import dbInit from './db/init';
// import passport from 'passport';


export const app = express();
const secret = process.env.JWT_SECRET;

if(secret) app.use(session({
    resave: false, 
    saveUninitialized: false,
    secret
  }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.json({
    message:'API is working',
    ack: Date.now()
});   
});

startup(app);
dbInit();
  
const port = process.env.PORT || 6007;
app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`))



