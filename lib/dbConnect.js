// /lib/dbConnect.js
import mongoose from 'mongoose';
import { placeholder } from '../pages/api/placeholder/placeholder.js';

const MONGODB_URI = process.env.DB_URL || placeholder.DB_URL;
console.log(process.env.DB_URL)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
try{  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
catch (e) {
  console.log(e);
  }
}

export default dbConnect;
