import mongoose from 'mongoose';

const sandwichSchema = new mongoose.Schema({
  name: String,
  breadType: String,
  ingredients: [String],
});

const Sandwich = mongoose.model('Sandwich', sandwichSchema);

export async function listAllSandwiches() {
  const sandwiches = await Sandwich.find();
  return sandwiches;
}

export async function createSandwich(sandwich) {
  // TODO: Return the sandwich that was created
  await Sandwich.create(sandwich);
}

export async function updateSandwich(id, sandwich) {
  // TODO: Return the sandwich that was updated
  await Sandwich.findByIdAndUpdate(id, sandwich);
}

export async function deleteSandwich(id) {
  // TODO: Return the sandwich that was deleted
  await Sandwich.findByIdAndDelete(id);
}
