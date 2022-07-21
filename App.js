const { render } = require('ejs');
const express=require('express');
const morgan=require('morgan')
const { default: mongoose } = require('mongoose');
const blogRoutes=require('./routes/blogroutes')

//create express app
const app=express();

//attach mango DB
const dbURI='mongodb+srv://root:aurgdEVc8RYGthP0@cluster0.1eqdqke.mongodb.net/blogMini?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
    console.log("Connected to database");
    app.listen(3001);})
.catch((err)=>console.log(err))

//Create view Engine
app.set('view engine','ejs')
//app.set('view','myViews')

//Create static to give access to file
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));//for display of info

//get requests
app.get('/',(req,res)=>{
    res.redirect('blogs');
})

app.get('/about',(req,res)=>{
    //res.sendFile('./views/about.html',{root:__dirname})
    res.render('about',{title:'About'});
});
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
});
//Blog Routes
app.use('/blogs', blogRoutes)

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
    
});          
