const kx = require('./connection');

kx.schema.createTable('clucks', table => {
  table.increments('id');
  table.string('username');
  table.string('photo_path');
  table.text('content');
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
}).then(()=>process.exit())
  .catch(()=>process.exit())
