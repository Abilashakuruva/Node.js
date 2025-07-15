const express=require('express');
const app=express()

app.use(express.json());

app.post('/sum',(req,res)=>{
    const {num1,num2}=req.body;

    if(typeof num1!=='number'|| typeof num2 !=='number'){
        return res.status(400).json({error:'num1 and num2 must be numbers'});
    }

    const sum=num1+num2;
    res.json({sum});
});

const PORT=3500;

app.listen(PORT,()=>{
    console.log(`Server started and running at ${PORT}`)
})

app.use('/',(req,res)=>{
    res.send("<h1>Welcome to Expressjs")
})