/*write node js program to create basic http server about College*/
//step1 import http module
const http=require("http")
//step2 create server using createServer() fuction of http module
const server=http.createServer((req,resp)=>{
/*step4 write the response headerusing writeHead() function with status code 200 and set
  content-type as text/html as object literals*/
  resp.writeHead(200,{"content-type":"text/html"})
  //step5 display the collge informationusing html anf write() function
   resp.write(`<h1>BLDEA'S COMM.BHS&TGP science collge</h1> `)
   resp.write(`<h2>started year:1963</h2>`)
   resp.write(`<h3>Location:Jamkhandi </h3>`)
   //step6 end the response
   resp.end()
})
//step3 listen the server request port number 3000 
server.listen(3000,()=>{console.log("server has been started")})