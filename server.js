import express from "express";
import mongoose from "mongoose";
import { createServer } from "http";
import logger from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";

//Import MongoDB Connection
import { mongoConnect } from "./api/config/database";

//Import Authentication Middleware
import isAuthenticated from "./api/utils/is-auth";


const app = express();
const server = createServer(app);

//Import All Routes
import userRoute from "./api/routes/user";
import eventRoute from "./api/routes/event";
import dashboardRoute from "./api/routes/dashboard";

//Setup Http-Logger Middleware
app.use(logger('dev'));

//Setup body-parser & cookie-parser middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));


//Handling CORS Errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods', 
      'PUT, POST, PATCH, GET, DELETE'
    );
    res.status(200).json({});
  }
  next();
});

//Authenticate Routes
app.use(isAuthenticated);

//Route for users
app.use('/user', userRoute);

//Route for event
app.use('/event', eventRoute);

//Route for dashboard
app.use('/user', dashboardRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Listen to server & connecting to mongodb
const port = process.env.PORT || 3000;
//import "bluebird";
mongoose.Promise = global.Promise;
mongoConnect(server, port);