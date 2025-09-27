import mongoose from "mongoose";

export default async function connectdb(){
    try {
        const connect = await mongoose.connect(process.env.CONNECTDB)
       console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        )
    } catch (error) {
         console.log(error)
        process.exit(1)
    }
}