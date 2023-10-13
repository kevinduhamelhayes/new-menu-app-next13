import { connect, connection, mongoose } from "mongoose";

export async function connectDB() {
  try {
    const db = await connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(db.connection.db.databaseName);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
}

// connection.on("connected", () => {
//   console.log("Mongodb is connected");
// })

// connection.on("error", (err) => {
//   console.log(err);
// })