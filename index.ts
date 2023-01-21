import express,{ Express, Request, Response } from "express"
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: string | number = process.env.PORT || 8000

app.get('/', (req: Request, res: response) => {
    res.status(200).send({
        "data":{
            "message": "Goodbye, world"
        }
    })
})

app.get('/hello', (req: Request, res: Response) => {
    const {name} = req.query
    console.log(name)

    if(!name) res.status(500).send({"data":{
        "message": "Hola anónimo",
    }})
    
    res.status(200).send({"data":{
        "message": `Hola ${name}`,
    }})
})

app.listen(port, () => {
    console.log(`Funcionando en el puerto ${port}`)
})