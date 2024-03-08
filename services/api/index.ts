import express, { Request, Response} from 'express';

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Palmeiras primeiro campeão mundial')
})

app.listen(3333, () => console.log("Listening on port 3333"))