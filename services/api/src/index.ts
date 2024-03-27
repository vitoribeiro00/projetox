

import express, { Request, Response} from 'express';

import env from './env';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/sync-requests', (req: Request, res: Response) => {
  console.log(req.body)
  res.status(200).send({message: "sync-requests"})
})

app.listen(env.port, '0.0.0.0', () => console.log(`API executando na porta ${env.port}`))