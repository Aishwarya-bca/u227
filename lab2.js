/*write a node js progarm to demonstarte to get a student data*/
//step1 import the http module
const http=require("http")
//step2 create server using createServer() function of http module
const server=http.createServer((req,resp)=>{
//step3 check the request method is get
if(req.method=="GET"){
    //step4 write the response header
    resp.writeHead(200,{"content-type":"text/html"})
    //step5 generate blank html form using write() function
    resp.write(`<form method="post">`)
    resp.write(`Rollno<input type="text" name="rno" /><br>`)
    resp.write(`Name<input type="text" name="name"/><br>`)
    resp.write(`<button type="submit">Submit</button>`)
    resp.write(`</form>`)
    resp.end()
    
}
//step7  check for the post request
 if(req.method=="POST"){
    let body=``;
    //step8 receive the data from post request in chunks for data event
    req.on("data",(chunk)=>{
        body=body+chunk
    })
    //step9 once data has been completely recived in chunks for data event  
    req.on("end",()=>{
        let data=new URLSearchParams(body)
        console.log(`Rollno=${data.get("rno")}`)
        console.log(`Name=${data.get("name")}`)
        //step10 write response header
        resp.writeHead(200,{"content-type":"text/html"})
        resp.write(`<h1>Your Information Received</h1>`)
        //end the response
        resp.end()
    })
}
})
//step3 listen client  request on port number 300 using listen() function
server.listen(3000,()=>{console.log("server has been started")})