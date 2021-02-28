import express from "express"
import cors from "cors"
import config from "../../config"
import mongoose from "mongoose"
import routes from "./routes"
import bodyParser from "body-parser"

const app = express()

app.use(cors({ origin: config.frontend.url }))

app.use(bodyParser.json())

routes(app)

async function start() {
  try {
    await mongoose.connect(config.backend.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })

    app.listen(config.backend.port, () => {
      console.log(`---------- localhost:${config.backend.port} started ----------`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
