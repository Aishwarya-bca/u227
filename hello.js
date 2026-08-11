const http=require("http");
const server=http.createServer((req,resp)=>{
   resp.writeHead(200,{"content-type":"text/html"})
   if(req.url=="/courses"){
      resp.write(`<h1>Courses</h1>`)
      resp.write(`<h2>BCA</h2>`)
      resp.write(`<h2>BBA</h2>`)
      resp.write(`<h2>BCM</h2>`)
      resp.end()
   }
   else{
   resp.write(`<h1>BLDEA'S COMM.BHS&TGP science collge</h1> `)
   resp.write(`<h2>started year:1932</h2>`)
   resp.write(`<h3>Location:Jamkhandi`)
   resp.end()
   }
})
server.listen(3000,()=>{console.log("server started")})
