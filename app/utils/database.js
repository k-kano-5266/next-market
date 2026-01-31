import mongoose from "mongoose"

const connectDB = async() => {
  try{
    await mongoose.connect("mongodb+srv://kano526620_db_user:pittr5266@cluster0.lgm3sos.mongodb.net/nextAppDatabase?appName=Cluster0ccls")
    console.log("Success: Connected to MongoDB")
  }catch{
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()

  }
}

export default connectDB