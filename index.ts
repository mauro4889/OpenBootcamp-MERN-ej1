import express,{ Express, Request, Response } from "express"
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: string | number = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
    const name = req.query.name
    
    if(!name) res.status(500).send({"data":{
        "message": "Hola anónimo",
    }})
    
    res.status(200).send({"data":{
        "message": `Hola anónimo ${name}`,
    }})
})

app.listen(port, () => {
    console.log(`Funcionando en el puerto ${port}`)
})