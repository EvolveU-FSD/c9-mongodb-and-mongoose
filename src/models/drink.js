import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
  name: String,
});

const Drink = mongoose.model('Drink', drinkSchema);

export async function listAllDrinks() {
  const drinks = await Drink.find();
  return drinks;
}

export async function createDrink(drink) {
  // TODO: Return the drink that was created
  await Drink.create(drink);
}

export async function updateDrink(id, drink) {
  // TODO: Return the drink that was updated
  await Drink.findByIdAndUpdate(id, drink);
}

export async function deleteDrink(id) {
  // TODO: Return the drink that was deleted
  await Drink.findByIdAndDelete(id);
}
