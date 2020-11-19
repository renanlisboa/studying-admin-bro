const mongoose = require('mongoose');

const EntitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
});

const Entity = mongoose.model('Entity', EntitySchema);

module.exports = { EntitySchema, Entity };