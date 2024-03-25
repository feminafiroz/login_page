const express =require('express')
const app=express()
const path=require('path')
const bodyparser=require("body-parser")
const session=require('express-session')
const port=process.env.PORT||4000.
const {v4:uuidv4}=require('uuid')
const router=require('./router')
const nocache=require('nocache')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(nocache())

app.set('view engine','ejs')

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assests',express.static(path.join(__dirname,'public','assests')))
app.use(session({
    secret:uuidv4(),
    resave:'false',
    saveUninitialized:true
}))

app.use('/route',router)


const checklogin=((req,res,next)=>{
    if(req.session.user){
        console.log(8)
        res.redirect('/route/dashboad')
    }else{
        console.log(9)
        next()
    }
})
// app.get('/',(req,res)=>{
//     res.render('base',{title:"login system"})
// })
app.get('/',checklogin,(req,res)=>{
    console.log(0)
    res.render('base',{title:"login system"})
})
app.listen(3006,()=>{
    console.log("server is running on3006 ")
})


