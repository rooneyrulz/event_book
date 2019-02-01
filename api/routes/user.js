import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Import User Model
import User from "../models/userSchema";

//Import JWT Key
import { JWT_KEY } from "../config/keys";

const router = express.Router({strict:true});

//@Discription > Getting All Of The Users
//@Route > /user
//@Access Control > Public
router.route('/').get((req, res, next) => {
  return User
    .find()
    .populate('createdEvents')
    .sort({ date: -1 })
    .select('name email username date createdItem _id')
    .exec()
    .then(users => {
      if (users.length < 1) {
        return res.status(404).json({
          success: false,
          message: `no users added yet...`,
          users: null
        });
      } else {
        return res.status(200).json({
          success: true,
          message: `you just requested get all of the users...`,
          users: users
        })
      }
    })
    .catch(err => {
      throw err.message;
    });
});

//@Discription > Posting Users To The DataBase
//@Route > /user/create
//@Access Control > Public
router.route('/create').post((req, res, next) => {
  return User
    .findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (user) {
        return res.status(409).json({
          success: false,
          message: `invalid email id...`,
          user: null
        });
      }
      return User
        .findOne({ username: req.body.username }).exec()
    })
    .then(user => {
      if (user) {
        return res.status(409).json({
          success: false,
          message: `invalid username...`,
          user: null
        });
      }
      return bcrypt.hash(req.body.password, 12);
    })
    .then(hashedPassword => {
      if (!hashedPassword) {
        throw new Error('something went wrong on hashing your password..');
      }
      let newUser = User({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword
      });
      return newUser
        .save()
    })
    .then(user => {
      return res.status(200).json({
        success: true,
        message: `user successfully saved...`,
        user: user
      });
    })
    .catch(err => {
      throw err.message;
    });
});

//@ Description > Authenticate User
//@ Route > /user/authenticate
//@ Access Control > Public
router.route('/authenticate').post((req, res, next) => {
  let currentUser = null;
  return User
    .findOne({ username: req.body.username })
    .exec()
    .then(user => {
      if (!user) {
        console.log(`user not found...`);
        return res.status(409).json({
          success: false,
          message: `user not found...`
        });
      }
      currentUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(isMatch => {
      if (!isMatch) {
        console.log(`invalid password...`);
        return res.status(409).json({
          success: false,
          message: `invalid password...`
        });
      }
      let token = jwt.sign(
        {
          id: currentUser._id,
          name: currentUser.name, 
          email: currentUser.email, 
          username: currentUser.username
        },
        JWT_KEY, 
        {expiresIn: '1h'}
      );
      return res.status(200).json({
        success: true,
        token: `Bearer ${token}`,
        user: { 
          id: currentUser._id,
          name: currentUser.name,
          email: currentUser.email,
          username: currentUser.username
        }
      });
    })
    .catch(err => {
      throw err.message;
    });
})

export default router;