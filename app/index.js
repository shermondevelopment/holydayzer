import express, { json } from 'express';
import cors from 'cors'

/* routes  */
import router from './routes.js'

const app = express()

app.use(cors())
app.use(json())
app.use(router)

app.listen(3333, () => console.log('app running 🚀🚀🚀'))