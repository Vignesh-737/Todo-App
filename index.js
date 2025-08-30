const express=require("express")
const app=express();
const path=require("path");
const mo=require("method-override");
app.use(mo("_method"))
const {nanoid}=require("nanoid")

app.set ("views", path.join(__dirname,"views"));
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}));

let todoList=[];

app.get("/todolist",(req,res)=>{
    res.render("index",{todoList});
});

app.get("/todolist/new",(req,res)=>{
    res.render("new");
});

app.post("/todolist",(req,res)=>{
    const {name}=req.body;
    let idno=nanoid(5);
    todoList.push({ name, createdAt: Date.now(), id: idno });
    res.redirect("/todolist")
})

app.get("/todolist/:id",(req,res)=>{
    const {id}=req.params;
    const todo=todoList.find(t=> t.id ==id);
if(!todo){
return res.status(404).render("error", { message: "Todo not found" });
}
    res.render("edit",{todo})
})
app.put("/todolist/:id",(req,res)=>{
    const{id}=req.params;
    const{name}=req.body;
    const todo=todoList.find(t=> t.id ==id);
    todo.name=name;
    res.redirect("/todolist")
})

app.delete("/todolist/:id",(req,res)=>{
    const {id}=req.params;
    todoList=todoList.filter(t=> t.id!=id)
    res.redirect("/todolist")
})

app.listen(3000,()=>{
    console.log("Server running on https://localhost:3000")
})
