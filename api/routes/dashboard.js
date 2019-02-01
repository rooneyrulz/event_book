import express from "express";
const router = express.Router();

import User from "../models/userSchema";


//@ Description > Getting the current user
//@ Route > /user/current
//@ Access Control > Private
router.route('/current').get((req, res, next) => {
  if (!req.isAuth) {
    console.log(`not authenticated!`);
    return res.status(401).json({
      authenticated:false
    });
  }
  return User
    .findOne({ _id: req.userId })
    .select('_id name')
    .exec()
    .then(user => {
      if (!user) {
        console.log(`logged in first...`);
      } else {
        return res.status(200).json(user);
      }
    })
    .catch(err => {
      throw err;
    }); 
});

export default router;