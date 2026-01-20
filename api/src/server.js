import http  from "node:http"

const server = http.createServer((request, response) => {
  // object destructuring. É o mesmo que criar (const method = request.method)
  const { method } = request 
  return response.writeHead(200).end("Criado com sucesso.")
})

server.listen(3333)