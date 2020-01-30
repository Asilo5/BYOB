
exports.up = function(knex) {
  return knex.schema
    .createTable('cities', (table) => {

    })

    .createTable('restaurants', (table) => {

    })
};

exports.down = function(knex) {
   return knex.schema
     .dropTable('cities')
     .dropTable('restaurants')
};
