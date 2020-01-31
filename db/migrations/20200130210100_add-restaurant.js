
exports.up = function(knex) {
    return knex.schema.table('cities', (table) => {
        table.string('restaurant');
    });
};
  
exports.down = function(knex) {
    return knex.schema.table('cities', (table) => {
    table.dropColumn('restaurant')
    });
};