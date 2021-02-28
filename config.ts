const frontPort = 3000
const backPort = 3849

export default {
  frontend: {
    port: frontPort,
    url: `http://localhost:${frontPort}`,
  },
  backend: {
    port: backPort,
    url: `http://localhost:${backPort}`,
    dbUrl: "mongodb://localhost:27017/main",
  },
}
