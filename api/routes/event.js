import express from "express";
import mongoose from "mongoose";

//Import Event Model
import Event from "../models/eventSchema";

//Import User Model
import User from "../models/userSchema";

const router = express.Router({strict:true});

//@ Description > Getting All Of The Events
//@ Route > /event/
//@ Access Control > Private
router.route('/').get((req, res, next) => {
  if (!req.isAuth) {
    console.log(`not authenticated!`);
    return res.status(401).json({
      authenticated:false
    });
  }
  return Event
    .find()
    .sort({ date: -1 })
    .select(' name price _id creator date ')
    .exec()
    .then(events => {
      if (events.length < 1) {
        return res.status(409).json({
          success: false,
          message: `events not found...`,
          events: null
        });
      } else {
        return res.status(200).json({
          success: true,
          message: `you are just requested to get all of the events...`,
          events: events
        });
      }
    })
    .catch(err => {
      throw err.message;
    });
});


//@ Description > Create Events
//@ Route > /event/create
//@ Access Control > Private
router.route('/create').post((req, res, next) => {
  if (!req.isAuth) {
    console.log(`not authenticated!`);
    return res.status(401).json({
      authenticated:false
    });
  }
  const currentUser = req.userId;
  let newEvent = Event({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    price: req.body.price,
    creator: currentUser
  });
  let createdEvent = null;
  return newEvent
    .save()
    .then(event => {
      createdEvent = event;
      return User.findOne({ _id: currentUser }).exec()
    })
    .then(user => {
      if (!user) {
        console.log(`invalid user id...`);
        return res.status(409).json({
          success: false,
          message: `invalid user id...`,
          events: null
        });
      }
      user.createdEvents.push(newEvent);
      user.save();
    })
    .then(user => {
      return res.status(200).json({
        success: true,
        message: `event successfully created...`,
        events: createdEvent
      });
    })
    .catch(err => {
      throw err.message;
    });
});


//@ Description > Getting All Of The Events By Current UserId
//@ Route > /event/:userId
//@ Access Control > Private
router.route('/:id').get((req, res, next) => {
  if (!req.isAuth) {
    console.log(`not authenticated!`);
    return res.status(401).json({
      authenticated:false
    });
  }
  const currentUserId = req.params.id;
  return User
    .findOne({ _id: currentUserId })
    .populate('createdEvents')
    .select('createdEvents')
    .exec()
    .then(events => {
      if (events.length < 1) {
        return res.status(409).json({
          success: false,
          message: `events not added yet...`,
          events: null
        });
      }
      return res.status(200).json(events);
    })
    .catch(err => {
      throw err.message;
    });
});


//@ Description > Delete Events
//@ Route > /event/:id
//@ Access Control > Private
router.route('/:id').delete((req, res, next) => {
  if (!req.isAuth) {
    console.log(`not authenticated!`);
    return res.status(401).json({
      authenticated:false
    });
  }
  const eventId = req.params.id;
  return Event
    .findOne({ _id: eventId })
    .exec()
    .then(event => {
      if (!event) {
        console.log(`event not found...`);
        return res.status(409).json({
          success: false,
          message: `no event found...`
        });
      }
      return Event.deleteOne({ _id: eventId }).exec();
    })
    .then(event => {
      console.log(`event deleted!`);
      return res.status(200).json({
        success: true,
        message: `event successfully deleted..`
      });
    })
    .catch(err => {
      throw err.message;
    });
});

export default router;