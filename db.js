import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

async function dbClose() {
  await mongoose.connection.close()
  console.log("Database disconnected!")
}


// connect to a MongoDB via Mongoose
try {
    const m = await mongoose.connect('mongodb+srv://Mario:firstMongoDB2035@cluster0.rtutryb.mongodb.net/journal?retryWrites=true&w=majority')
    console.log(m.connection.readyState === 1 ? 'Mongoose connection established!' : 'Mongoose failed to connect!!')
}
catch (err) {
    console.log(err)
}


// create a Mongoose schema to define the structure of a entry model
const entrySchema = new mongoose.Schema({
  category: { type: mongoose.ObjectId, ref: 'Category' },
  content: { type: String, required: true }
})

// Create a Mongoose model based on the entry schema
const EntryModel = mongoose.model('Entry', entrySchema)


// create a Mongoose schema to define the structure of a category model
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }
})

// Create a Mongoose model based on the category schema
const CategoryModel = mongoose.model('Category', categorySchema)

export { EntryModel, CategoryModel, dbClose }