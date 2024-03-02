// app.js

const express = require('express');
const app = express();
const port = 3000;
const {createTodo} =require("./types")
const cors = require('cors')


app.use(express.json());
app.use(cors());

// Middleware for parsing JSON requests
app.use(express.json());

// Sample route
app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload); 
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        });
        return;
    }

    // put in mongoo db
    await createTodo.create({ // Fix typo here
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "todo created"
    });
});



app.get('/todo',async function (req, res)  {
  const todo = await todo.find({});
  res.json({
    todo
  })
});



app.put('/completed',async function(req,res){
    const updatePayload= req.body;
    const parsedpayload = updateTodo.safeparse(updatePayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
        await todo.update({
            _id:req.body.id
        },{
            completed:true
        })
        res.json({
          msg:      "todo mark as compleated"
        })

    
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
     