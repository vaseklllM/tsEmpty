import { Express } from "express"
import hello from "./hello"

export default function routes(app: Express) {
  app.use("/api", hello)
}
