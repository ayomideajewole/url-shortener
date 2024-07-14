import Url from './models/url'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    Url.sync({ alter: isDev })
}
export default dbInit