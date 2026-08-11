/*lab7 develop expressJS app to Restfull API on student record*/
const express=require("express")
const app=express()
app.use(express.json())
let students=[
    {id:1,name:'Anand',Course:'BCA'},
    {id:2,name:'Harsha',Course:'BBA'}
]
app.get("/students",(req,resp)=>{
    resp.json(students)
})
app.get("/students/:id",(req,resp)=>{
    let sid=req.params.id
    const s=students.find((s)=>{return s.id==sid})
    if(s){
        resp.json(s)
    }else{
        resp.status(404).json({"message":"student record not found"})
    }
})
app.post("/students",(req,resp)=>{
    let id=req.body.id
    let name=req.body.name
    let Course=req.body.Course
    let s={id:id,name:name,Course:Course}
    students.push(s)
    resp.status(201).json({"messag":"new student created","student":s})
})
app.put("/students/:id",(req,resp)=>{
    let sid=req.params.id
    let index=students.findIndex((s)=>s.id=sid)
    if(index!=-1){
        let name=req.body.name
        let Course=req.body.Course
        let s={id:sid,name:name,Course:Course}
        students[index]=s
        resp.json({"message":"student record updated","student":s})
    }
    else{
        resp.json({"message":"student record not found"})
    }  
})
app.delete("/students/:id",(req,resp)=>{
    let sid=req.params.id
    let s=students.find((s)=>{return s.id==sid})
    if(s){
        students=students.find((s)=>{return s.id!=sid})
        resp.status(204).json({"message":"Student record deleted"})
    }else{
        resp.status(404).json({"message":"student record not found"})
    }
})
app.listen(3000,()=>{console.log("server started")})