const { Entity } = require('../../app/Entities/EntityModel');

const entityResource = {
  resource: Entity,
  options: {
    properties: {
      _id: {
        isVisible: false,
      },
    },
  },
}

module.exports = entityResource;

