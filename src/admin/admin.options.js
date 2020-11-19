const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
AdminBro.registerAdapter(AdminBroMongoose);

const entityResource = require('./resources/entity.resources');
const userResource = require('./resources/user.resources');

const options = {
  resources: [ entityResource, userResource ],
  locale: {
    translations: {
      labels: {
        Entity: "Empresas",
        User: "Usuários",
      },
    },
  },
  rootPath: "/admin",
}

module.exports = options;