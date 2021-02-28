import React, { ReactElement, useEffect } from "react"
import config from '../../../config'

interface Props {}

export default function TestCard({}: Props): ReactElement {
  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const res = await fetch(config.backend.url)

    if (res.ok) {
      const data = await res.json()
      console.log(data)
    }
  }

  return <div>TestCard</div>
}
