import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
(async () => {
  try {
    //console.log(process.env.DB_URL);
    await mongoose.connect(process.env.DB_URL, 
      {
      useNewUrlParser: true, 
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('DB connected successfully');
  } catch (err) {
    console.error('Connection to db failed', err);
  }
})();

export default mongoose.connection;