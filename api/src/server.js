import http  from "node:http"

const server = http.createServer((request, response) => {
  return response.end("Resposta do Servidor!!")
})

server.listen(3333)