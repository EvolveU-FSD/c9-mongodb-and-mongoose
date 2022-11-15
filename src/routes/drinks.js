import express from 'express';
import {
  createDrink,
  deleteDrink,
  listAllDrinks,
  updateDrink,
} from '../models/drink.js';

export const drinksRouter = express.Router();

// List all drinks
drinksRouter.get('/', async (request, response) => {
  const drinks = await listAllDrinks();
  response.send(drinks);
});

// Create a new drink
drinksRouter.post('/', async (request, response) => {
  const drink = request.body;

  // TODO: Send back the drink that was created
  await createDrink(drink);

  response.send();
});

// Update a drink
drinksRouter.patch('/:id', async (request, response) => {
  const drinkId = request.params.id;
  const drink = request.body;

  // TODO: Send back the drink that was updated
  await updateDrink(drinkId, drink);

  response.send();
});

// Delete a drink
drinksRouter.delete('/:id', async (request, response) => {
  const drinkId = request.params.id;

  // TODO: Send back the drink that was deleted
  await deleteDrink(drinkId);

  response.send();
});
