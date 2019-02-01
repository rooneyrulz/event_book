import mongoose from "mongoose";
const Schema = mongoose.Schema;

let eventSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },

  name: {
    type: String,
    required: [true, 'event name is required...']
  },

  price: {
    type: String,
    required: [true, 'price is required...']
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },

  date: {
    type: Date,
    default: Date.now
  }
});


export default mongoose.model('Events', eventSchema);