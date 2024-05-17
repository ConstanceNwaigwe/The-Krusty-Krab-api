import mongoose from 'mongoose';

//creating data schema for the staff
// data set needed: name, job title, contact, and image of staff

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

export default mongoose.model('Staff', staffSchema);