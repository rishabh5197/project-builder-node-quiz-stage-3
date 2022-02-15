const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
app.use(express.json())
const dbUrl = 'mongodb+srv://nirupamadas:<PASSWORD>@nirupamacluster.q1z7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.get('/', async function(req,res){
    const client = await MongoClient.connect(dbUrl)//1
    try{
      
        res.json({
            message: 'Connected Successfully',

        })
    }
    catch(err)
    {
        console.log(err)
    }
    finally{
        client.close()
    }
})

//questions endpoints

app.get('/api/questions',async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    try{
        let db = await client.db('quiz');
        const questions =await db.collection("questions").find().toArray()
        res.json({
            message: 'Displaying all records',
            questions
        });
       
       
    }
    catch(err)
    {
        console.log(err)
    }
    finally{
        client.close()
    }
})

app.post('/api/questions', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
      

    try {
        
        const db = await client.db("quiz");
        const user = await db.collection("questions").insertOne(req.body);
        
        res.json({
            message:"Record Inserted",
        })
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.get('/api/questions/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
        const Id = parseInt(req.params.id)

    try {
        
        const db = await client.db("quiz");
        const result =await  db.collection("questions").findOne({id:Id});
        if(result){
            res.json({
                message: "Record is found",
                result
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.put('/api/questions/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)//1
    const Id = parseInt(req.params.id)
    try {
        const db = client.db("quiz");
        const record =await db.collection("questions").findOneAndUpdate({id: Id},{$set:{question: req.body.question}});
        if(record){
            res.json({
                message: "Record is updated",
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.delete('/api/questions/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    const Id = parseInt(req.params.id)
    try {
        const db = client.db("quiz");
        const record =await db.collection("questions").deleteOne({id: Id});
        if(record){
            res.json({
                message: "Record is deleted",
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {

        await client.close();

    }
})

//options endpoints

app.get('/api/options',async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    try{
        let db = await client.db('quiz');
        const options =await db.collection("options").find().toArray()
        res.json({
            message: 'Displaying all records',
            options
        });
       
       
    }
    catch(err)
    {
        console.log(err)
    }
    finally{
        client.close()
    }
})

app.post('/api/options', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
      

    try {
        
        const db = await client.db("quiz");
        const user = await db.collection("options").insertOne(req.body);
        
        res.json({
            message:"Record Inserted",
        })
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.get('/api/options/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
        const Id = parseInt(req.params.id)

    try {
        
        const db = await client.db("quiz");
        const result =await  db.collection("options").findOne({id:Id});
        if(result){
            res.json({
                message: "Record is found",
                result
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.put('/api/options/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)//1
    const Id = parseInt(req.params.id)
    try {
        const db = client.db("quiz");
        const record =await db.collection("options").findOneAndUpdate({id: Id},{$set:{question: req.body.question}});
        if(record){
            res.json({
                message: "Record is updated",
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.delete('/api/options/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    const Id = parseInt(req.params.id)
    try {
        const db = client.db("quiz");
        const record =await db.collection("options").deleteOne({id: Id});
        if(record){
            res.json({
                message: "Record is deleted",
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {

        await client.close();

    }
})

//answers endpoints

app.get('/api/answers',async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    try{
        let db = await client.db('quiz');
        const answers = await db.collection("answers").find().toArray()
        res.json({
            message: 'Displaying all records',
            answers
        });
       
       
    }
    catch(err)
    {
        console.log(err)
    }
    finally{
        client.close()
    }
})

app.post('/api/answers', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
      

    try {
        
        const db = await client.db("quiz");
        const user = await db.collection("answers").insertOne(req.body);
        
        res.json({
            message:"Record Inserted",
        })
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.get('/api/answers/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
        const Id = parseInt(req.params.id)

    try {
        
        const db = await client.db("quiz");
        const result =await  db.collection("answers").findOne({id:Id});
        if(result){
            res.json({
                message: "Record is found",
                result
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.put('/api/answers/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)//1
    const Id = parseInt(req.params.id)
    try {
        const db = client.db("quiz");
        const record =await db.collection("answers").findOneAndUpdate({id: Id},{$set:{question: req.body.question}});
        if(record){
            res.json({
                message: "Record is updated",
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.delete('/api/answers/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    const Id = parseInt(req.params.id)
    try {
        const db = client.db("quiz");
        const record =await db.collection("answers").deleteOne({id: Id});
        if(record){
            res.json({
                message: "Record is deleted",
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {

        await client.close();

    }
})


app.listen(5000,()=>console.log('Server running on Port 5000'))