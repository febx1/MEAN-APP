const express =require('express')
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Request-With,Content-Type,Acccept");
  res.setHeader("Access-Control-Allow-Method","GET,POST,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-user","GET,POST,PATCH,DELETE,OPTIONS");
  next();
})

app.post('/api/posts',(req,res,next)=>{
  const post=req.body;
  console.log(post);
  res.status(201).json({
    message:'Post added successfully'
  })
});

app.use('/api/posts',(req,res,next)=>{
  const posts=[
    {id:'adfasdf',
    title:'first server side post',
  content:'This is from server'},
    {id:'adfasdfadfdfr',
    title:'Second server side post',
  content:'This is from server'},
  ];

 res.status(200).json({
  message:'Posts fetched successfully',
  posts:posts
 })
})

module.exports=app;
