import mongoose from "mongoose"

const URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_NAME}?${process.env.MONGODB_URL_OPTIONS}`

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true
  }

  try {
    await mongoose.connect(URL, {})
    console.info("MongoDB connected")
    return true
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}
