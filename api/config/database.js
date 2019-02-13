import mongoose from "mongoose";

//Import MONGO UI
import { MONGO_UI, MONGO_USER, USER_PSWD } from "./keys";

export const mongoConnect = (server, port) => {

  //Connecting to MongoDb
  return mongoose
    .connect(MONGO_UI, {
      auth: {
        user: MONGO_USER,
        password: USER_PSWD
      },
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(res => {
      server.listen(port , () => console.log(`server running on port ${port}`));
    })
    .catch(err => {
      throw err.message
    });
}