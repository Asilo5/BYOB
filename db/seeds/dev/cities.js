const locations = require('../../../restaurantsData');

const createCity = async (knex, city) => {

  const cityId = await knex('cities').insert({
    city,
    avgVegans: city.avgVegans
  }, 'id');

  let restaurantPromises = city.restaurants.map((restaurant) => {
    return createRestaurant(knex, {
      restaurant,
      restaurant_id: cityId[0]
    })
  });

  return Promise.all(restaurantPromises);
};

const createRestaurant = (knex, restaurant) => {
  return knex('footnotes').insert(restaurant);
};

exports.seed = async (knex) => {
  try {
    await knex('restaurants').del()
    await knex('cities').del()

    let citiesPromises = locations.map((location)=> {
      return createCity(knex, location);
    });

    return Promise.all(citiesPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
