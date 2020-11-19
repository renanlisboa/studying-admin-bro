const { User } = require('../../app/Entities/UserModel');

const userResource = {
  resource: User,
  options: {
    properties: {
      _id: {
        isVisible: false,
      },
    },
  },
}

module.exports = userResource;