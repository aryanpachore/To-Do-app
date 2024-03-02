import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.connect("mongodb+srv://admin:qV99cLZedhOJYKpG@cluster0.xwzajrh.mongodb.net/")
const todoSchema= mongoose.schema({
    title:String,
    descriptionn:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);