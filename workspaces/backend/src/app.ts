import express, { Application, json, Request, Response } from 'express'
import Message from '@chatapp/shared'
import cors from 'cors'

const app: Application = express()
app.use(cors())
app.use(json())
const port: number = parseInt(process.env.SERVER_PORT || "3001")

app.get('/messages', (req: Request, res: Response<Message>) => {
res.send({
    id: "123",
    text: "Hej",
    timeStamp: new Date()
})
})

app.listen(port, function () {
console.log(`App is listening on port ${port} !`)
})
