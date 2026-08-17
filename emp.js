const express=require("express");
const app=express()
app.use(express.json())
let employees=[
    {id:1,name:"Aishwarya",department:"IT",salary:30000},
    {id:2,name:"Adarsh",department:"HR",salary:35000},
];
app.get("/employees",(req,resp)=>{
    resp.json(employees)
})
app.get("/employees/:id",(req,resp)=>{
    let eid=req.params.id
    const e=employees.find((e)=>{return e.id=eid})
    if(e){
        resp.json(e)
    }
    else{
        resp.status(404).json({"message":"employee record not found"})
    }
})
app.post("/employees",(req,resp)=>{
    let id=req.body.id
    let name=req.body.name
    let department=req.body.department
    let salary=req.body.salary
    let e={id:id,name:name,department:department,salary:salary}
    employees.push(e)
    resp.status(201).json({"message":"new employee created","employee":e})
})
app.put("/employees/:id",(req,resp)=>{
    let eid=req.params.id
    let index=employees.findIndex((e)=>e.id=eid)
    if (index-1){
        let name=req.body.name
        let department=req.body.department
        let salary=req.body.salary
        let e={id:eid,name:name,department:department,salary:salary}
        employees[index]=e
        resp.json({"message":"employee record updated","employee":e})
    }
    else{
        resp.json({"message":"employee record not found"})
    }
})
app.delete("/employees/:id",(req,resp)=>{
    let eid=req.params.id
    let e=employees.find((e)=>{return e.id=eid})
    if(e){
        employees=employees.find((e)=>{return e.id!=eid})
        resp.status(204).json({"message":"employee record deleted"})
    }
    else{
        resp.status(404).json({"message":"employee record not found"})
    }
})
app.listen(3000,()=>{console.log("server started")})