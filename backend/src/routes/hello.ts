import { Router } from "express"

const router = Router()

router.post("/hello", async (req, res) => {
  console.log("object")

  res.status(200).json({ message: `hi ${req.body?.name}` })
  // return undefined
})

export default router
