import Url from './models/url';
import sequelizeConnection from './config'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = async () => {
    try {
      await sequelizeConnection.authenticate();
      console.log('Connection has been established successfully.');
  
      await Url.sync({ alter: isDev });
      console.log('Url model was synchronized successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
export default dbInit