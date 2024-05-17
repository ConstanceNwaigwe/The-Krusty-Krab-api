import mongoose from 'mongoose';

//creating data schema for the recipes
// data set needed: name, ingredients, and image of food

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

export default mongoose.model('Menu', menuSchema);